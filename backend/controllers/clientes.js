const User = require("../models/Clientes");
const Historico = require("../models/Historico");

exports.cadastrar = (req, res) => {
    try{
        User.findByPk(req.body.cpf).then(user => {         
            if(user == null) {   //nenhuma pessoa cadastrada com o cpf
                User.findOne({where: {"email": req.body.email}}).then(user2 =>{
                    if(user2 == null){   //nenhuma pessoa cadastrada com email
                        if(req.body.password.length >= 8){   //senha com no mínimo 8 dígitos
                            req.body.userType = 1;
                            User.create(req.body).then(user3 => {  //cadastrando usuário 
                                res.status(200).send("Cadastro feito com sucesso.");
                            });
                        }
                        else{
                            res.status(200).send("A senha deve conter no mínimo 8 dígitos.");
                        }
                    }
                    else{
                        res.status(200).send("Email já utilizado.");
                    }
                });
            }else{
                res.status(200).send("CPF já cadastrado.");
            }
        });
    }catch(error) {
        return res.status(500).send("Falha ao criar.");
    }
}

exports.remover = (req, res) => {

    try{
        User.findByPk(req.body.cpf).then(user => {
            if(user == null) {   //nenhuma pessoa cadastrada com o cpf
                res.status(200).send("CPF não cadastrado.");
            }
            else{
                if(req.body.password == user.password){
                    User.destroy({ where: { "cpf" : req.body.cpf } }).then(() => {
                        res.status(200).send("Removido com sucesso.");
                    });
                }
                else{
                    res.status(200).send("Senha incorreta.");
                }
            }
        });
    }catch(error) {
        return res.status(500).send("Falha ao criar.");
    }   
}