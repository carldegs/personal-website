import { Center, Heading, Input, Stack } from '@chakra-ui/react';
import { FormProvider } from 'react-hook-form';

import { HomeSections } from '../constants/routes';
import ContactFormObject from '../formHandlers/ContactFormObject';
import useJoiForm from '../hooks/useJoiForm';
import { ScrollableSection } from '../molecules/ScrollableSection';
import QFormControl from './QFormControl';

const ContactPanel: React.FC = () => {
  const methods = useJoiForm(ContactFormObject);

  return (
    <ScrollableSection hash={HomeSections.contact}>
      <Center w="full">
        <Stack w="full" maxW="container.sm">
          <Heading>Let&apos;s get in touch.</Heading>
          <FormProvider {...methods}>
            <QFormControl name="name" label="Name">
              <Input />
            </QFormControl>
          </FormProvider>
        </Stack>
      </Center>
    </ScrollableSection>
  );
};

export default ContactPanel;
