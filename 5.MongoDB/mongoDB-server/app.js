const { MongoClient, ObjectId } = require('mongodb');
// 连接URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// 数据库名称
const sqlName = 'testsql';
const dbName = 'cc';

const clientFn = async (Collections) => {
    // 使用连接方法连接到服务器
    await client.connect();

    //  找到数据库
    const db = client.db(sqlName);

    //  找到集合并返回
    return db.collection(Collections);

}

const main = async () => {

    const cc = await clientFn(dbName);
    //  数据库里面的操作全都是异步

    //  增

    // const rest = await cc.insertMany([
    //     {
    //         username: "admin",
    //         age: 2
    //     },
    //     {
    //         username: "mengmeng",
    //         age: 12
    //     },
    //     {
    //         username: "xiaxia",
    //         age: 18,
    //     },
    //     {
    //         username: "xiaxia",
    //         age: 18,
    //     }
    // ]);

    // const rest = await cc.insertOne({
    //     username: "natasha",
    //     age: 18,
    // })

    // 查

    // const rest = await cc.find().toArray();
    // const rest = await cc.findOne({username: 'admin'})

    // 改

    // const rest = await cc.updateOne({username: "admin"},{$set:{password: 12346}})

    // 删

    // const rest = await cc.deleteMany({age:{$gt:10}})
    // const rest = await cc.deleteOne({_id: ObjectId("6370fe98747ebe076fefe8a3")})

    // console.log(rest);
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close()); // 关闭数据库连接