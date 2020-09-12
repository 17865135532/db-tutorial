# MongoDB 索引

<!-- TOC depthFrom:2 depthTo:3 -->

<!-- /TOC -->

索引支持在 MongoDB 中高效执行查询。没有索引，MongoDB 必须执行集合扫描，即扫描集合中的每个文档，以选择与查询语句匹配的那些文档。如果查询存在适当的索引，则 MongoDB 可以使用该索引来限制它必须检查的文档数。

索引是特殊的数据结构，它以易于遍历的形式存储集合数据集的一小部分。索引存储一个特定字段或一组字段的值，按该字段的值排序。索引条目的排序支持有效的相等匹配和基于范围的查询操作。另外，MongoDB 可以使用索引中的顺序返回排序的结果。

![](https://raw.githubusercontent.com/dunwu/images/dev/snap/20200912175026.svg)

从根本上讲，MongoDB 中的索引类似于其他数据库系统中的索引。 MongoDB 在集合级别定义索引，并支持 MongoDB 集合中文档的任何字段或子字段的索引。

## 索引操作

### 创建索引

MongoDB 使用 `createIndex()` 方法来创建索引。

> 注意
>
> 在 3.0.0 版本前创建索引方法为 `db.collection.ensureIndex()`，之后的版本使用了 `db.collection.createIndex()` 方法，`ensureIndex()` 还能用，但只是 `createIndex()` 的别名。

createIndex() 方法的基本语法如下：

```javascript
db.collection.createIndex( <key and index type specification>, <options> )
```

【示例】创建单一索引示例

```javascript
db.collection.createIndex({ name: -1 })
```

【示例】创建复合索引示例

```javascript
db.products.createIndex({ item: 1, stock: 1 })
```

createIndex() 接收可选参数，可选参数列表如下：

| Parameter          | Type          | Description                                                                                                                                      |
| :----------------- | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| background         | Boolean       | 建索引过程会阻塞其它数据库操作，background 可指定以后台方式创建索引，即增加 "background" 可选参数。 "background" 默认值为**false**。             |
| unique             | Boolean       | 建立的索引是否唯一。指定为 true 创建唯一索引。默认值为**false**.                                                                                 |
| name               | string        | 索引的名称。如果未指定，MongoDB 的通过连接索引的字段名和排序顺序生成一个索引名称。                                                               |
| dropDups           | Boolean       | **3.0+版本已废弃。**在建立唯一索引时是否删除重复记录,指定 true 创建唯一索引。默认值为 **false**.                                                 |
| sparse             | Boolean       | 对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为 true 的话，在索引字段中不会查询出不包含对应字段的文档.。默认值为 **false**. |
| expireAfterSeconds | integer       | 指定一个以秒为单位的数值，完成 TTL 设定，设定集合的生存时间。                                                                                    |
| v                  | index version | 索引的版本号。默认的索引版本取决于 mongod 创建索引时运行的版本。                                                                                 |
| weights            | document      | 索引权重值，数值在 1 到 99,999 之间，表示该索引相对于其他索引字段的得分权重。                                                                    |
| default_language   | string        | 对于文本索引，该参数决定了停用词及词干和词器的规则的列表。 默认为英语                                                                            |
| language_override  | string        | 对于文本索引，该参数指定了包含在文档中的字段名，语言覆盖默认的 language，默认值为 language.                                                      |

### 查看索引

查看集合索引

```javascript
db.collection.getIndexes()
```

查看集合索引大小

```javascript
db.collection.totalIndexSize()
```

### 删除索引

删除集合所有索引

```javascript
db.collection.dropIndexes()
```

删除集合指定索引

```javascript
db.collection.dropIndex('索引名称')
```

## 参考资料

- [MongoDB 官网](https://www.mongodb.com/)
- [MongoDBGithub](https://github.com/mongodb/mongo)
- [MongoDB 官方免费教程](https://university.mongodb.com/)
- [MongoDB 教程](https://www.runoob.com/mongodb/mongodb-tutorial.html)
