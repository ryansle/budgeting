import { useState } from 'react';

// Components
import {
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Select,
  Button,
} from '@chakra-ui/react'
import DatePicker from './DatePicker';

const Form = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Box>
      <FormControl isRequired>
        <FormLabel>Transaction Date</FormLabel>
        <DatePicker date={date} setDate={setDate} />

        <FormLabel>Description</FormLabel>
        <Textarea
          mb={5}
          placeholder='A short description of the transaction or where it occurred.'
        />

        <FormLabel>Tags</FormLabel>
        <Button width='full' mb={5}>Choose Tags</Button>

        <FormLabel>Amount</FormLabel>
        <Input
          mb={5}
          placeholder='How much money did you spend?'
        />

        <FormLabel>Payment Method</FormLabel>
        <Select mb={10} />

        <Button width='full'>Submit Entry</Button>
      </FormControl>
    </Box>
  );
};

export default Form;
