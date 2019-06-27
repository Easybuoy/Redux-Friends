import styled from "styled-components";

const Navbar = styled.nav`
  width: 100%;
  background-color: #3a7ca5;
  text-align: center;
  padding: 1rem 0;

  .nav-item {
    text-decoration: none;
    padding: 1rem 1rem;
    color: #ffffff;
    cursor: pointer;
    font-weight: bolder;

    &:hover {
      background-color: #f7f0f0;
      color: #3a7ca5;
      transition: all 0.3s ease-in-out;
    }
  }
`;

const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 20%;
  background-color: #f7f0f0;
  margin: 1rem;
  border: none;
  text-align: center;
  padding: 1rem;
  transition: all 0.6s ease-in-out;

  &:hover {
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 1);
    transform: scale(1.03);
  }

  @media (max-width: 750px) {
    width: 40%;

    padding: 1rem 0;
  }

  @media (max-width: 500px) {
    width: 90%;
    margin: 1rem 0;
    padding: 1rem 0;
  }
`;

const Button = styled.button`
  outline: none;
  background-color: #3a7ca5;
  color: #ffffff;
  padding: 0.5rem;
  margin: 0.3rem 0.3rem;
  font-size: 1rem;
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #3a7ca5;
    background-color: #ffffff;
    border: 1px solid #3a7ca5;
  }
`;

const H1 = styled.h1`
  text-align: center;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  justify-content: center;
  margin: 5rem auto;
  background-color: #f7f0f0;
  padding: 1rem 0;

  input {
    width: 90%;
    padding: 0.5rem 0.5rem;
    margin: 0.5rem 0;
    border: none;
    outline: none;
  }
`;

const PreLoader = styled.div`
  margin: 15rem 0;
`;

export { CardGroup, Card, Button, H1, Navbar, Form, PreLoader };
