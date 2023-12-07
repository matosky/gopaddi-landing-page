import styled from "styled-components";

export const ProfileWrap = styled.div`
  width: fit-content;
  background-color: #fff;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  gap: 4rem;
  border: 2px solid #eee;
  padding: 0 0.3rem;

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
  }

`