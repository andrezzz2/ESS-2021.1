const User = require("../models/Clientes");

exports.cadastrar = (req, res) => {
    try{
        User.findByPk(req.body.cpf).then(user => {         
            if(user == null) {   //nenhuma pessoa cadastrada com o cpf
                User.findOne({where: {"email": req.body.email}}).then(user2 =>{
                    if(user2 == null){   //nenhuma pessoa cadastrada com email
                        if(req.body.password.length >= 8){   //senha com no mínimo 8 dígitos
                            req.body.userType = 1;
                            User.create(req.body).then(user3 => {  //cadastrando usuário 
                                res.status(201).send("Cadastro feito com sucesso!");
                            });
                        }
                        else{
                            res.status(401).send("A senha deve conter no mínimo 8 dígitos.");
                        }
                    }
                    else{
                        res.status(401).send("Email já utilizado.");
                    }
                });
            }else{
                res.status(401).send("CPF já cadastrado.");
            }
        });
    }catch(error) {
        return res.status(500).send("Falha ao criar.");
    }
}

exports.get = (req, res) => {
    res.send("servidor está ativo");
}