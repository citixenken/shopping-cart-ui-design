import styled from "styled-components";

// using styled components
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
export default function Announcement() {
  return (
    <Container>Super Deal! Free Shipping On Orders over Ksh. 5,000/=</Container>
  );
}
