import { Container, UnorderedList, ListItem } from '@chakra-ui/react';
const GdprInfo = () => {
  return (
    <Container bg="jamk.blueJAMK" maxW="100%" color="white">
      <Container fontSize="4em" maxW="100%" pr="2em" pl="2em" fontWeight="bold" centerContent>
        GDPR
      </Container>
      <Container maxW="5xl" fontWeight="bold" mt="0.5em" mb="0.5em" fontSize="2em">
        Introduction
      </Container>
      <Container maxW="5xl" bg="jamk.magentaJAMK" fontSize="1.25em" borderRadius="0.25em" p="0.75em">
        At RODON, we are committed to respecting and protecting the privacy of our clients and their data. This privacy
        policy explains how we collect, process, and share personal data of our clients in accordance with the General
        Data Protection Regulation (GDPR).
      </Container>
      <Container maxW="5xl" fontWeight="bold" mt="0.5em" mb="0.5em" fontSize="2em">
        About Rodon
      </Container>
      <Container maxW="5xl" bg="jamk.magentaJAMK" fontSize="1.25em" borderRadius="0.25em" p="0.75em">
        RODON is a company that provides a skill collector service to help companies select valuable and necessary
        skills in the IT field. We collect information such as the company name, Person name, IP address, and the skills
        the persons have chosen. We keep these records until the company makes new selections regarding said skills. We
        also share the skill data and company name with the LIPPA Foundation to improve and rearrange studies in the IT
        field and to have an understanding of the skills needed in IT working life as of right now.
      </Container>
      <Container maxW="5xl" fontWeight="bold" mt="0.5em" mb="0.5em" fontSize="2em">
        What information do we collect from our clients?
      </Container>
      <Container maxW="5xl" bg="jamk.magentaJAMK" borderRadius="0.25em" p="0.75em">
        <UnorderedList fontSize="1.5em">
          <ListItem>Company Name</ListItem>
          <ListItem>Person name</ListItem>
          <ListItem>Skills chosen by the person</ListItem>
          <ListItem>IP Address</ListItem>
        </UnorderedList>
      </Container>
      <Container maxW="5xl" fontWeight="bold" mt="0.5em" mb="0.5em" fontSize="2em">
        How do we use this information?
      </Container>
      <Container maxW="5xl" bg="jamk.magentaJAMK" fontSize="1.25em" borderRadius="0.25em" p="0.75em">
        We use the information collected to provide our skill collector service to the company. Additionally, we share
        the skill data and company name with the LIPPA Foundation to improve and rearrange studies in the IT field and
        to have an understanding of the skills needed in IT working life as of right now. IP address will not be shared.
        We use it for secure functionality of service and usage.
      </Container>
      <Container maxW="5xl" fontWeight="bold" mt="0.5em" mb="0.5em" fontSize="2em">
        How do we protect your data?
      </Container>
      <Container maxW="5xl" bg="jamk.magentaJAMK" fontSize="1.25em" borderRadius="0.25em" p="0.75em">
        RODON takes appropriate technical and organizational measures to protect your personal data from unauthorized
        access, accidental loss, destruction, or damage. We limit access to personal data to authorized personnel only.
        We also perform regular backups of all personal data to prevent accidental loss or damage. All data transmitted
        between the client and server is encrypted using industry-standard SSL/TLS protocols to ensure its
        confidentiality and integrity. This means that any data you transmit to us, including your personal data, is
        protected from interception and tampering by third parties.
      </Container>
      <Container maxW="5xl" fontWeight="bold" mt="0.5em" mb="0.5em" fontSize="2em">
        How long do we keep your data?
      </Container>
      <Container maxW="5xl" bg="jamk.magentaJAMK" fontSize="1.25em" borderRadius="0.25em" p="0.75em">
        We keep the data collected from our clients until they make new selections regarding the skills they require. We
        only keep the data for as long as it is necessary for the purpose it was collected.
      </Container>
      <Container maxW="5xl" fontWeight="bold" mt="0.5em" mb="0.5em" fontSize="2em">
        Your rights as a client of Rodon:
      </Container>
      <Container maxW="5xl" bg="jamk.magentaJAMK" borderRadius="0.25em" p="0.75em">
        <UnorderedList fontSize="1.5em">
          <ListItem>The right to access and obtain a copy of your personal data</ListItem>
          <ListItem>The right to rectify or update your personal data</ListItem>
          <ListItem>The right to erase your personal data</ListItem>
          <ListItem>The right to restrict the processing of your personal data</ListItem>
          <ListItem>The right to object to the processing of your personal data</ListItem>
          <ListItem>The right to data portability</ListItem>
        </UnorderedList>
      </Container>

      <Container maxW="5xl" fontWeight="bold" mt="0.5em" mb="0.5em" fontSize="2em">
        Changes to our privacy policy:
      </Container>
      <Container maxW="5xl" bg="jamk.magentaJAMK" fontSize="1.25em" borderRadius="0.25em" p="0.75em">
        RODON reserves the right to modify this privacy policy at any time. We encourage our clients to review this
        policy regularly to stay informed about how we protect their personal data.
      </Container>
      <Container maxW="5xl" fontWeight="bold" mt="0.5em" mb="0.5em" fontSize="2em">
        Contact us:
      </Container>
      <Container maxW="5xl" bg="jamk.magentaJAMK" fontSize="1.25em" borderRadius="0.25em" p="0.75em">
        <p>Contact info coming later</p>
      </Container>
    </Container>
  );
};
export default GdprInfo;
