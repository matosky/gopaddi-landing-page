import styled from "styled-components";

export const ProfileWrap = styled.div`
  width: fit-content;
  background-color: #fff;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  gap: 1rem;
  border: 0.1px solid #000;
  padding: 0 1rem;

  .img{
    width: 20px;
    height: 20px;
    img{
      width: 100%;
    height: 100%;
    object-fit: cover;
    }
  

  }

  span{
    display: block;
    margin: 0.2rem;
    letter-spacing: -0.004;
    font-size: 1.5rem;
  }

  .icon{
    font-weight: 100;
    opacity: 0.7;
  }

`