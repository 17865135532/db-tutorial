# MongoDB 应用指南

## 简介

MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。

MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。

### MongoDB 发展

- 1.x - 支持复制和分片
- 2.x - 更丰富的数据库功能
- 3.x - WiredTiger 和周边生态
- 4.x - 支持分布式事务

### MongoDB 和 RDBMS

| 特性      | MongoDB                                          | RDBMS    |
| --------- | ------------------------------------------------ | -------- |
| 数据模型  | 文档模型                                         | 关系型   |
| CRUD 操作 | MQL/SQL                                          | SQL      |
| 高可用    | 复制集                                           | 集群模式 |
| 扩展性    | 支持分片                                         | 数据分区 |
| 扩繁方式  | 垂直扩展+水平扩展                                | 垂直扩展 |
| 索引类型  | B 树、全文索引、地理位置索引、多键索引、TTL 索引 | B 树     |
| 数据容量  | 没有理论上限                                     | 千万、亿 |

### MongoDB 特性

- 数据是 JSON 结构
  - 支持结构化、半结构化数据模型
  - 可以动态响应结构变化
- 通过副本机制提供高可用
- 通过分片提供扩容能力

## MongoDB 概念

| SQL 术语/概念 | MongoDB 术语/概念 | 解释/说明                              |
| :------------ | :---------------- | :------------------------------------- |
| database      | database          | 数据库                                 |
| table         | collection        | 数据库表/集合                          |
| row           | document          | 数据记录行/文档                        |
| column        | field             | 数据字段/域                            |
| index         | index             | 索引                                   |
| table joins   |                   | 表连接,MongoDB 不支持                  |
| primary key   | primary key       | 主键,MongoDB 自动将\_id 字段设置为主键 |

### 数据库

一个 MongoDB 中可以建立多个数据库。

MongoDB 的默认数据库为"db"，该数据库存储在 data 目录中。

MongoDB 的单个实例可以容纳多个独立的数据库，每一个都有自己的集合和权限，不同的数据库也放置在不同的文件中。

**"show dbs"** 命令可以显示所有数据的列表。

```shell
$ ./mongo
MongoDBshell version: 3.0.6
connecting to: test
> show dbs
local  0.078GB
test   0.078GB
>
```

执行 **"db"** 命令可以显示当前数据库对象或集合。

```shell
$ ./mongo
MongoDBshell version: 3.0.6
connecting to: test
> db
test
>
```

运行"use"命令，可以连接到一个指定的数据库。

```shell
> use local
switched to db local
> db
local
>
```

数据库也通过名字来标识。数据库名可以是满足以下条件的任意 UTF-8 字符串。

- 不能是空字符串（"")。
- 不得含有 ' '（空格)、`.`、`\$`、`/`、`\`和 `\0` (空字符)。
- 应全部小写。
- 最多 64 字节。

有一些数据库名是保留的，可以直接访问这些有特殊作用的数据库。

- **admin**：从权限的角度来看，这是"root"数据库。要是将一个用户添加到这个数据库，这个用户自动继承所有数据库的权限。一些特定的服务器端命令也只能从这个数据库运行，比如列出所有的数据库或者关闭服务器。
- **local**：这个数据永远不会被复制，可以用来存储限于本地单台服务器的任意集合
- **config**：当 Mongo 用于分片设置时，config 数据库在内部使用，用于保存分片的相关信息。

### 文档

文档是一组键值(key-value)对(即 BSON)。MongoDB 的文档不需要设置相同的字段，并且相同的字段不需要相同的数据类型，这与关系型数据库有很大的区别，也是 MongoDB 非常突出的特点。

需要注意的是：

- 文档中的键/值对是有序的。
- 文档中的值不仅可以是在双引号里面的字符串，还可以是其他几种数据类型（甚至可以是整个嵌入的文档)。
- MongoDB 区分类型和大小写。
- MongoDB 的文档不能有重复的键。
- 文档的键是字符串。除了少数例外情况，键可以使用任意 UTF-8 字符。

文档键命名规范：

- 键不能含有 `\0` (空字符)。这个字符用来表示键的结尾。
- `.` 和 `$` 有特别的意义，只有在特定环境下才能使用。
- 以下划线 `_` 开头的键是保留的(不是严格要求的)。

### 集合

集合就是 MongoDB 文档组，类似于 RDBMS （关系数据库管理系统：Relational Database Management System)中的表格。

集合存在于数据库中，集合没有固定的结构，这意味着你在对集合可以插入不同格式和类型的数据，但通常情况下我们插入集合的数据都会有一定的关联性。

合法的集合名：

- 集合名不能是空字符串""。
- 集合名不能含有 `\0` 字符（空字符)，这个字符表示集合名的结尾。
- 集合名不能以"system."开头，这是为系统集合保留的前缀。
- 用户创建的集合名字不能含有保留字符。有些驱动程序的确支持在集合名里面包含，这是因为某些系统生成的集合中包含该字符。除非你要访问这种系统创建的集合，否则千万不要在名字里出现 `$`。

### 元数据

数据库的信息是存储在集合中。它们使用了系统的命名空间：`dbname.system.*`

在 MongoDB 数据库中名字空间 `<dbname>.system.*` 是包含多种系统信息的特殊集合(Collection)，如下:

| 集合命名空间             | 描述                                      |
| :----------------------- | :---------------------------------------- |
| dbname.system.namespaces | 列出所有名字空间。                        |
| dbname.system.indexes    | 列出所有索引。                            |
| dbname.system.profile    | 包含数据库概要(profile)信息。             |
| dbname.system.users      | 列出所有可访问数据库的用户。              |
| dbname.local.sources     | 包含复制对端（slave）的服务器信息和状态。 |

对于修改系统集合中的对象有如下限制。

在 `system.indexes` 插入数据，可以创建索引。但除此之外该表信息是不可变的(特殊的 drop index 命令将自动更新相关信息)。`system.users` 是可修改的。`system.profile` 是可删除的。

## MongoDB 数据类型

| 数据类型           | 描述                                                                                                       |
| :----------------- | :--------------------------------------------------------------------------------------------------------- |
| String             | 字符串。存储数据常用的数据类型。在 MongoDB 中，UTF-8 编码的字符串才是合法的。                              |
| Integer            | 整型数值。用于存储数值。根据你所采用的服务器，可分为 32 位或 64 位。                                       |
| Boolean            | 布尔值。用于存储布尔值（真/假）。                                                                          |
| Double             | 双精度浮点值。用于存储浮点值。                                                                             |
| Min/Max keys       | 将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。                                               |
| Array              | 用于将数组或列表或多个值存储为一个键。                                                                     |
| Timestamp          | 时间戳。记录文档修改或添加的具体时间。                                                                     |
| Object             | 用于内嵌文档。                                                                                             |
| Null               | 用于创建空值。                                                                                             |
| Symbol             | 符号。该数据类型基本上等同于字符串类型，但不同的是，它一般用于采用特殊符号类型的语言。                     |
| Date               | 日期时间。用 UNIX 时间格式来存储当前日期或时间。你可以指定自己的日期时间：创建 Date 对象，传入年月日信息。 |
| Object ID          | 对象 ID。用于创建文档的 ID。                                                                               |
| Binary Data        | 二进制数据。用于存储二进制数据。                                                                           |
| Code               | 代码类型。用于在文档中存储 JavaScript 代码。                                                               |
| Regular expression | 正则表达式类型。用于存储正则表达式。                                                                       |

## MongoDB CRUD

### 数据库操作

#### 查看所有数据库

```shell
show dbs
```

#### 创建数据库

```shell
use <database>
```

如果数据库不存在，则创建数据库，否则切换到指定数据库。

【示例】创建数据库，并插入一条数据

刚创建的数据库 test 并不在数据库的列表中， 要显示它，需要插入一些数据

```shell
> use test
switched to db test
>
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> db.test.insert({"name":"mongodb"})
WriteResult({ "nInserted" : 1 })
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
test    0.000GB
```

#### 删除数据库

删除当前数据库

```shell
db.dropDatabase()
```

### 集合操作

#### 查看集合

```shell
show collections
```

#### 创建集合

```shell
db.createCollection(name, options)
```

参数说明：

- name: 要创建的集合名称
- options: 可选参数, 指定有关内存大小及索引的选项

options 可以是如下参数：

| 字段        | 类型 | 描述                                                                                                                                                     |
| :---------- | :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| capped      | 布尔 | （可选）如果为 true，则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。 **当该值为 true 时，必须指定 size 参数。** |
| autoIndexId | 布尔 | 3.2 之后不再支持该参数。（可选）如为 true，自动在 \_id 字段创建索引。默认为 false。                                                                      |
| size        | 数值 | （可选）为固定集合指定一个最大值，即字节数。 **如果 capped 为 true，也需要指定该字段。**                                                                 |
| max         | 数值 | （可选）指定固定集合中包含文档的最大数量。                                                                                                               |

在插入文档时，MongoDB 首先检查固定集合的 size 字段，然后检查 max 字段。

```shell
> db.createCollection("collection")
{ "ok" : 1 }
> show collections
collection
```

#### 删除集合

```shell
> db.collection.drop()
true
> show collections
>
```

### 插入文档操作

MongoDB 使用 insert() 方法完成插入操作。

**语法格式**

```shell
# 插入单条记录
db.<集合>.insertOne(<JSON>)
# 插入多条记录
db.<集合>.insertMany([<JSON 1>, <JSON 2>, ..., <JSON N>])
```

【示例】insertOne

```shell
> db.color.insertOne({name: "red"})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5f533ae4e8f16647950fdf43")
}
```

【示例】insertMany

```shell
> db.color.insertMany([
  {
    "name": "yellow"
  },
  {
    "name": "blue"
  }
])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("5f533bcae8f16647950fdf44"),
                ObjectId("5f533bcae8f16647950fdf45")
        ]
}
>
```

### 查询文档操作

MongoDB 使用 `find()` 方法完成查询文档操作。

**语法格式**

```shell
db.<集合>.find(<JSON>)
```

查询条件也是 json 形式，如果不设置查询条件，即为全量查询。

#### 查询条件

| 操作                    | 格式                                    | 范例                                       | RDBMS 中的类似语句    |
| :---------------------- | :-------------------------------------- | :----------------------------------------- | :-------------------- |
| 等于                    | `{<key>:<value>`}                       | `db.book.find({"pageCount": {$eq: 0}})`    | `where pageCount = 0` |
| 不等于                  | `{<key>:{$ne:<value>}}`                 | `db.book.find({"pageCount": {$ne: 0}})`    | `where likes != 50`   |
| 大于                    | `{<key>:{$gt:<value>}}`                 | `db.book.find({"pageCount": {$gt: 0}})`    | `where likes > 50`    |
| `{<key>:{$gt:<value>}}` | `db.book.find({"pageCount": {$gt: 0}})` | `where likes > 50`                         | 大于或等于            |
| 小于                    | `{<key>:{$lt:<value>}}`                 | `db.book.find({"pageCount": {$lt: 200}})`  | `where likes < 50`    |
| 小于或等于              | `{<key>:{$lte:<value>}}`                | `db.book.find({"pageCount": {$lte: 200}})` | `where likes <= 50`   |

> 说明：
>
> ```shell
> $eq  --------  equal  =
> $ne ----------- not equal  !=
> $gt -------- greater than  >
> $gte --------- gt equal  >=
> $lt -------- less than  <
> $lte --------- lt equal  <=
> ```

【示例】

```shell


# 统计匹配查询条件的记录数
> db.book.find({"status": "MEAP"}).count()
68
```

#### 查询逻辑条件

（1）and 条件

MongoDB 的 find() 方法可以传入多个键(key)，每个键(key)以逗号隔开，即常规 SQL 的 AND 条件。

语法格式如下：

```shell
> db.col.find({key1:value1, key2:value2}).pretty()
```

（2）or 条件

MongoDB OR 条件语句使用了关键字 **\$or**,语法格式如下：

```shell
>db.col.find(
   {
      $or: [
         {key1: value1}, {key2:value2}
      ]
   }
).pretty()
```

#### 模糊查询

查询 title 包含"教"字的文档：

```shell
db.col.find({ title: /教/ })
```

查询 title 字段以"教"字开头的文档：

```shell
db.col.find({ title: /^教/ })
```

查询 titl e 字段以"教"字结尾的文档：

```shell
db.col.find({ title: /教$/ })
```

#### Limit() 方法

如果你需要在 MongoDB 中读取指定数量的数据记录，可以使用 MongoDB 的 Limit 方法，limit()方法接受一个数字参数，该参数指定从 MongoDB 中读取的记录条数。

limit()方法基本语法如下所示：

```shell
>db.COLLECTION_NAME.find().limit(NUMBER)
```

#### Skip() 方法

我们除了可以使用 limit()方法来读取指定数量的数据外，还可以使用 skip()方法来跳过指定数量的数据，skip 方法同样接受一个数字参数作为跳过的记录条数。

skip() 方法脚本语法格式如下：

```shell
>db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)
```

#### Sort() 方法

在 MongoDB 中使用 sort() 方法对数据进行排序，sort() 方法可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，其中 1 为升序排列，而 -1 是用于降序排列。

sort()方法基本语法如下所示：

```shell
>db.COLLECTION_NAME.find().sort({KEY:1})
```

> 注意：skip(), limilt(), sort()三个放在一起执行的时候，执行的顺序是先 sort(), 然后是 skip()，最后是显示的 limit()。

### 更新文档操作

update() 方法用于更新已存在的文档。语法格式如下：

```shell
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
```

**参数说明：**

- **query** : update 的查询条件，类似 sql update 查询内 where 后面的。
- **update** : update 的对象和一些更新的操作符（如$,$inc...）等，也可以理解为 sql update 查询内 set 后面的
- **upsert** : 可选，这个参数的意思是，如果不存在 update 的记录，是否插入 objNew,true 为插入，默认是 false，不插入。
- **multi** : 可选，mongodb 默认是 false,只更新找到的第一条记录，如果这个参数为 true,就把按条件查出来多条记录全部更新。
- **writeConcern** :可选，抛出异常的级别。

【示例】更新文档

```shell
db.collection.update({ title: 'MongoDB 教程' }, { $set: { title: 'MongoDB' } })
```

【示例】更新多条相同文档

以上语句只会修改第一条发现的文档，如果你要修改多条相同的文档，则需要设置 multi 参数为 true。

```shell
db.collection.update(
  { title: 'MongoDB 教程' },
  { $set: { title: 'MongoDB' } },
  { multi: true }
)
```

【示例】更多实例

只更新第一条记录：

```shell
db.collection.update({ count: { $gt: 1 } }, { $set: { test2: 'OK' } })
```

全部更新：

```shell
db.collection.update(
  { count: { $gt: 3 } },
  { $set: { test2: 'OK' } },
  false,
  true
)
```

只添加第一条：

```shell
db.collection.update(
  { count: { $gt: 4 } },
  { $set: { test5: 'OK' } },
  true,
  false
)
```

全部添加进去:

```shell
db.collection.update(
  { count: { $gt: 4 } },
  { $set: { test5: 'OK' } },
  true,
  false
)
```

全部更新：

```shell
db.collection.update(
  { count: { $gt: 4 } },
  { $set: { test5: 'OK' } },
  true,
  false
)
```

只更新第一条记录：

```shell
db.collection.update(
  { count: { $gt: 4 } },
  { $set: { test5: 'OK' } },
  true,
  false
)
```

### 删除文档操作

官方推荐使用 deleteOne() 和 deleteMany() 方法删除数据。

删除 status 等于 A 的全部文档：

```shell
db.collection.deleteMany({ status: 'A' })
```

删除 status 等于 D 的一个文档：

```shell
db.collection.deleteOne({ status: 'D' })
```

### 索引操作

索引通常能够极大的提高查询的效率，如果没有索引，MongoDB 在读取数据时必须扫描集合中的每个文件并选取那些符合查询条件的记录。

这种扫描全集合的查询效率是非常低的，特别在处理大量的数据时，查询可以要花费几十秒甚至几分钟，这对网站的性能是非常致命的。

索引是特殊的数据结构，索引存储在一个易于遍历读取的数据集合中，索引是对数据库表中一列或多列的值进行排序的一种结构。

MongoDB 使用 createIndex() 方法来创建索引。

createIndex()方法基本语法格式如下所示：

```shell
>db.collection.createIndex(keys, options)
```

语法中 Key 值为你要创建的索引字段，1 为指定按升序创建索引，如果你想按降序来创建索引指定为 -1 即可。

```shell
>db.col.createIndex({"title":1})
```

createIndex() 方法中你也可以设置使用多个字段创建索引（关系型数据库中称作复合索引）。

```shell
>db.col.createIndex({"title":1,"description":-1})
```

createIndex() 接收可选参数，可选参数列表如下：

| Parameter          | Type          | Description                                                                                                                                      |
| :----------------- | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| background         | Boolean       | 建索引过程会阻塞其它数据库操作，background 可指定以后台方式创建索引，即增加 "background" 可选参数。 "background" 默认值为**false**。             |
| unique             | Boolean       | 建立的索引是否唯一。指定为 true 创建唯一索引。默认值为**false**.                                                                                 |
| name               | string        | 索引的名称。如果未指定，MongoDB 的通过连接索引的字段名和排序顺序生成一个索引名称。                                                               |
| ~~dropDups~~       | ~~Boolean~~   | ~~**3.0+版本已废弃。**在建立唯一索引时是否删除重复记录,指定 true 创建唯一索引。默认值为 **false**。~~                                            |
| sparse             | Boolean       | 对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为 true 的话，在索引字段中不会查询出不包含对应字段的文档.。默认值为 **false**. |
| expireAfterSeconds | integer       | 指定一个以秒为单位的数值，完成 TTL 设定，设定集合的生存时间。                                                                                    |
| v                  | index version | 索引的版本号。默认的索引版本取决于 mongod 创建索引时运行的版本。                                                                                 |
| weights            | document      | 索引权重值，数值在 1 到 99,999 之间，表示该索引相对于其他索引字段的得分权重。                                                                    |
| default_language   | string        | 对于文本索引，该参数决定了停用词及词干和词器的规则的列表。 默认为英语                                                                            |
| language_override  | string        | 对于文本索引，该参数指定了包含在文档中的字段名，语言覆盖默认的 language，默认值为 language.                                                      |

## MongoDB 聚合操作

MongoDB 中聚合(aggregate)主要用于处理数据(诸如统计平均值,求和等)，并返回计算后的数据结果。有点类似 sql 语句中的 count(\*)。

### 管道

整个聚合运算过程称为管道，它是由多个步骤组成，每个管道

- 接受一系列文档（原始数据）；
- 每个步骤对这些文档进行一系列运算；
- 结果文档输出给下一个步骤；

聚合操作的基本格式

```shell
pipeline = [$stage1, $stage1, ..., $stageN];

db.<集合>.aggregate(pipeline, {options});
```

### 聚合步骤

| 步骤                 | 作用     | SQL 等价运算符  |
| -------------------- | -------- | --------------- |
| `$match`             | 过滤     | WHERE           |
| `$project`           | 投影     | AS              |
| `$sort`              | 排序     | ORDER BY        |
| `$group`             | 分组     | GROUP BY        |
| `$skip` / `$limit`   | 结果限制 | SKIP / LIMIT    |
| `$lookup`            | 左外连接 | LEFT OUTER JOIN |
| `$unwind`            | 展开数组 | N/A             |
| `$graphLookup`       | 图搜索   | N/A             |
| `$facet` / `$bucket` | 分面搜索 | N/A             |

【示例】

```shell
> db.collection.insertMany([{"title":"MongoDB Overview","description":"MongoDB is no sql database","by_user":"collection","tagsr":["mongodb","database","NoSQL"],"likes":"100"},{"title":"NoSQL Overview","description":"No sql database is very fast","by_user":"collection","tagsr":["mongodb","database","NoSQL"],"likes":"10"},{"title":"Neo4j Overview","description":"Neo4j is no sql database","by_user":"Neo4j","tagsr":["neo4j","database","NoSQL"],"likes":"750"}])
> db.collection.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])
{ "_id" : null, "num_tutorial" : 3 }
{ "_id" : "Neo4j", "num_tutorial" : 1 }
{ "_id" : "collection", "num_tutorial" : 2 }
```

下表展示了一些聚合的表达式:

| 表达式      | 描述                                           | 实例                                                                                    |
| :---------- | :--------------------------------------------- | :-------------------------------------------------------------------------------------- |
| `$sum`      | 计算总和。                                     | `db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}])` |
| `$avg`      | 计算平均值                                     | `db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$avg : "$likes"}}}])` |
| `$min`      | 获取集合中所有文档对应值得最小值。             | `db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$min : "$likes"}}}])` |
| `$max`      | 获取集合中所有文档对应值得最大值。             | `db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$max : "$likes"}}}])` |
| `$push`     | 在结果文档中插入值到一个数组中。               | `db.mycol.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}])`            |
| `$addToSet` | 在结果文档中插入值到一个数组中，但不创建副本。 | `db.mycol.aggregate([{$group : {_id : "$by_user", url : {$addToSet : "$url"}}}])`       |
| `$first`    | 根据资源文档的排序获取第一个文档数据。         | `db.mycol.aggregate([{$group : {_id : "$by_user", first_url : {$first : "$url"}}}])`    |
| `$last`     | 根据资源文档的排序获取最后一个文档数据         | `db.mycol.aggregate([{$group : {_id : "$by_user", last_url : {$last : "$url"}}}])`      |

## 参考资料

- [MongoDB 官网](https://www.mongodb.com/)
- [MongoDBGithub](https://github.com/mongodb/mongo)
- [MongoDB 教程](https://www.runoob.com/mongodb/mongodb-tutorial.html)
