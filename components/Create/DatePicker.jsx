// Components
import { Box } from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { CalendarIcon as Calendar } from '@chakra-ui/icons';

const DatePicker = ({ date, setDate }) => {
  return (
    <Box position='relative' mb={5}>
      <SingleDatepicker
        date={date}
        position='absolute'
        onDateChange={setDate}
        configs={{
          dateFormat: 'MM/dd/yyyy'
        }}
      />
      <Calendar position='absolute' right='5' top='3' />
    </Box>
  );
};

export default DatePicker;
