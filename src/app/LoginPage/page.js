"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { instance } from "../lib/api";
import Loginimg from "../../assets/1000041623.jpg";
import Loginpg from "../../assets/login-background.png";
import SuccessPopup from "./Successpop";
import FailurePopup from "./FailurePopup";

export default function Loginform() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await instance.post("/login", formData);
      SuccessPopup("Login successful!");
      router.push("/protected/admin/slider");
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Login failed!";
      FailurePopup(errorMsg);
    }
  };

  return (
    <LoginContainer>
        <Row>
          <Col md={3}></Col>
          <Col md={6} xs={12}>
            <LoginBox>
              <Image src={Loginimg} alt="login" width={120} height={120} />
              <form onSubmit={handleSubmit} className="login">
                <h2>Deepan Login</h2>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <SubmitButton type="submit">Login</SubmitButton>
              </form>
              <Link href="/">Go To Home</Link>
            </LoginBox>
          </Col>
          <Col md={3}></Col>
        </Row>
    </LoginContainer>
  );
}

// Styled components
const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      90deg,
      rgba(250, 0, 1, 0.26) 1%,
      rgba(0, 0, 0, 0.52) 54%,
      rgba(7, 49, 159, 0.18) 97%
    ),
    url(${Loginpg.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const LoginBox = styled.div`
  background: linear-gradient(
    90deg,
    rgba(192, 2, 2, 1) 0%,
    rgba(2, 0, 36, 0.2) 49%,
    rgba(5, 46, 138, 1) 100%
  );
  padding: 25px 20px;
  text-align: center;
  border-radius: 8px;
  width: 100%;

  .login {
    margin: 20px auto;
    padding: 30px 20px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #666;
  }

  .login h2 {
    margin-bottom: 20px;
    color: #ef5350;
    font-size: 28px;
  }

  a {
    display: inline-block;
    margin-top: 15px;
    color: #fff;
    font-weight: 500;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  transition: 0.2s;

  &:hover {
    border-color: #f44336;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: rgb(225, 35, 35);
  color: #fff;
  font-size: 1rem;
  padding: 10px;
  width: 100%;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
