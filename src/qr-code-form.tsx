import TextInput from "./components/text-input";
import Text from "./components/typography";
import Flex from "./components/flex";
import DropDown from "./components/dropdown";
import Button from "./components/button";

const countries = [
  { value: 1, text: "Malta" },
  { value: 2, text: "Iran" },
  { value: 3, text: "USA" },
  { value: 4, text: "Belarus" },
];

const QrCodeForm = () => {
  return (
    <>
      <Text variant="h6" text="YOUR NAME" />
      <Flex>
        <Text variant="subtitle1" text="FIRST NAME" />
        <TextInput />
        <Text variant="subtitle1" text="LAST NAME" />
        <TextInput />
      </Flex>
      <Text variant="h6" text="CONTACT" />
      <Flex>
        <Text variant="subtitle1" text="EMAIL" />
        <TextInput />
        <Text variant="subtitle1" text="MOBILE" />
        <TextInput />
        <Text variant="subtitle1" text="PHONE" />
        <TextInput />
        <Text variant="subtitle1" text="FAX" />
        <TextInput />
      </Flex>
      <Text variant="h6" text="COMPANY" />
      <Flex>
        <Text variant="subtitle1" text="COMPANY NAME" />
        <TextInput />
        <Text variant="subtitle1" text="YOUR JOB" />
        <TextInput />
      </Flex>
      <Text variant="h6" text="LOCATION" />
      <Flex>
        <Text variant="subtitle1" text="STREET ADDRES" />
        <TextInput />
        <Text variant="subtitle1" text="COUNTRY" />
        <DropDown value="country" label="country" items={countries} />
        <Text variant="subtitle1" text="STATE" />
        <TextInput />
        <Text variant="subtitle1" text="CITY" />
        <TextInput />
        <Text variant="subtitle1" text="ZIP" />
        <TextInput />
      </Flex>
      <Button text="Submit" onclick={() => alert('Heey')} />
    </>
  );
};

export default QrCodeForm;
