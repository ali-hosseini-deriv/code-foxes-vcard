import TextInput from "./components/text-input";
import Text from "./components/typography";
import {Felx, StyledGrid} from "./components/flex";
import DropDown from "./components/dropdown";
import Button from "./components/button";
import styled from 'styled-components';
import {Grid} from '@mui/material';

const FormCard = styled.div`
  border: 1px solid #f2f2f2;
  margin-top: 50px;
  border-radius: 5px;
  background-color: white;
`
const FormHeader = styled.div`
  border-bottom: 1px solid #f2f2f2;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 30px;
  background-color: #fafafa;
  display: flex;

  & .square {
    width: 25px;
    height: 25px;
    padding: 25px;
    background-color: #59626d;
    border-radius: 5px;
    margin-right: 10px;
  }
`
const TextHeader = styled.div`
    padding: 20px 30px 0 30px;
    border-bottom: 1px solid #ececec;

    &  .header_text {
          padding: 5px 0;
          margin-block-start: 0;
          margin-block-end: 0;
          position: relative;
          border-bottom: 2px solid #ff8f43;
          display: inline-block;
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 1.6;
        }
`

const Wrapper = styled.div`
    padding: 15px 30px;
`

const WrapperButton = styled.div`
    margin: 50px 0;
    padding: 0 30px;
`





const countries = [
  { value: 1, text: "Malta" },
  { value: 2, text: "Iran" },
  { value: 3, text: "USA" },
  { value: 4, text: "Belarus" },
];

const QrCodeForm = () => {
  return (
    <FormCard>
      <FormHeader>
        <div className="square"/>
        <div>
          <Text variant="h6" text="VCard" />
          <Text variant="h9" text="Generate your VCard" />
        </div>
      </FormHeader>
      <TextHeader>
        <p className="header_text">YOUR NAME</p>
      </TextHeader>
      <StyledGrid container spacing={2}>
        <Grid item md={6}>
          <TextInput label="FIRST NAME"/>
        </Grid>
        <Grid item md={6}>
          <TextInput label="LAST NAME" />
        </Grid>  
      </StyledGrid>
      <TextHeader>
        <p className="header_text">CONTACT</p>
      </TextHeader>
      <Wrapper>
          <TextInput label="EMAIL" />
      </Wrapper>
        <StyledGrid container spacing={2}>
        <Grid item md={6}>
          <TextInput label="MOBILE"/>
        </Grid>
        <Grid item md={6}>
          <TextInput label="PHONE" />
        </Grid>  
      </StyledGrid>
        <StyledGrid container spacing={2}>
        <Grid item md={6}>
          <TextInput label="FAX"/>
        </Grid>
      </StyledGrid>
      
      <TextHeader>
        <p className="header_text">COMPANY</p>
      </TextHeader>

      <StyledGrid container spacing={2}>
        <Grid item md={6}>
          <TextInput label="COMPANY NAME"/>
        </Grid>
        <Grid item md={6}>
          <TextInput label="YOUR JOB"/>
        </Grid>  
      </StyledGrid>

      <TextHeader>
        <p className="header_text">LOCATION</p>
      </TextHeader>

      <Wrapper>
          <TextInput label="STREET ADDRES" />
      </Wrapper>
        <StyledGrid container spacing={2}>
        <Grid item md={6}>
          <TextInput label="COUNTRY" />
        </Grid>
        <Grid item md={6}>
          <TextInput label="STATE" />
        </Grid>  
      </StyledGrid>
        <StyledGrid container spacing={2}>
        <Grid item md={6}>
           <TextInput label="CITY" />
        </Grid>
        <Grid item md={6}>
           <TextInput label="ZIP"/>
        </Grid>
      </StyledGrid>

      <TextHeader>
        <p className="header_text">ONLINE</p>
      </TextHeader>
      <Wrapper>
          <TextInput label="WEBSITE" />
      </Wrapper>

      <WrapperButton>
          <Button text="Generate QR Code" onclick={() => alert('Heey')} />
      </WrapperButton>
      
    </FormCard>
  );
};

export default QrCodeForm;
