const con = require("../../connections/connection");

const maincontroller = {
    getAll_customer(req, res) {
        let openCon = con();

        openCon.connect((err) => {
            if (err) throw err;
            openCon.query("SELECT * FROM db_customer", (err, result, fields) => {
                if (err) throw err;

                openCon.end();

                res.setHeader("Content-Type", "application/json");
                res.send(JSON.stringify(result));
            });
        });
    },
    insert_customer(req, res) {


        let { Name, Email, Gender, Position } = req.body;

        let openCon = con();

        openCon.connect((err) => {
            if (err) throw err;
            var sql = `INSERT INTO db_customer (Name, Email,Gender,Position) 
            VALUES 
            ('${Name}',
            '${Email}',
            '${Gender}',
            '${Position}')`;
            openCon.query(sql, (err, result) => {
                if (err) throw err;
                openCon.end();
                let sendresult = {
                    statuscode: 200,
                    Des: "insert success",
                };
                res.setHeader("Content-Type", "application/json");
                res.send(JSON.stringify(sendresult));
            });
        });
    },
    updatecustomer(req, res) {


        let { ID, Name, Email, Gender, Position } = req.body;

        let openCon = con();

        openCon.connect((err) => {
            if (err) throw err;
            var sql = `UPDATE db_customer SET
                 Name = '${Name}',
                 Email = '${Email}',
                 Gender = '${Gender}',
                 Position = '${Position}'
            WHERE ID = '${ID}'`;
            openCon.query(sql, (err, result) => {
                if (err) throw err;
                openCon.end();
                let sendresult = {
                    statuscode: 200,
                    Des: "update success",
                };
                res.setHeader("Content-Type", "application/json");
                res.send(JSON.stringify(sendresult));
            });
        });
    },
    deletecustomer(req, res) {

        let { ID } = req.body;

        let openCon = con();

        console.log(ID)
        openCon.connect((err) => {
            if (err) throw err;
            var sql = `DELETE FROM db_customer 
            WHERE ID = '${ID}'`;
            openCon.query(sql, (err, result) => {
                if (err) throw err;
                openCon.end();
                let sendresult = {
                    statuscode: 200,
                    Des: "delete success",
                };
                res.setHeader("Content-Type", "application/json");
                res.send(JSON.stringify(sendresult));
            });
        });

    }
};

module.exports = maincontroller;