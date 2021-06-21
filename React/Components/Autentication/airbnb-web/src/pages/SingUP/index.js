import React, {Component} from 'react'

import { Link, withRouter } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import api from "../../services/api";

//import Logo from '';

import { Form, Container, LogoIcon, Input, Button } from './styles';

class SingUp extends Component{
    state = {

        username : '',
        email    : '',
        password : '',
        error    : '',

    };

    handleSingUp = async(e) => {

        e.preventDefault();

        const { username, email, password } = this.state;

        if (!username || !email || !password) {
                this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
                 try {
                        // await api.post("/users/register", { username, email, password });
                         this.props.history.push("/login");
                } catch (err) {
                                console.log(err);
                                 this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
                }
        }
    }

    render(){
        return(

            <Container>
                <Form onSubmit={this.handleSingUp}>
                    <img src={Logo} alt="Airbnb logo" />
                        {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit">Cadastrar grátis</button>
                    <hr />
                    <Link to="/login">Fazer login</Link>       

                </Form>

            </Container>
        )
    }
}; export default withRouter(SingUp);
 