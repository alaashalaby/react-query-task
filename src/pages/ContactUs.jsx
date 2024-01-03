import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Text,
} from "@chakra-ui/react";
import useTitle from "../Hook/useTitle";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup"
const ContactUs = () => {
    useTitle("Contact Us");
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message:""
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      .email("Invalid Email Address")
      .required("Email is Required"),
    message: Yup.string().required("Please Enter Your Message"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Container maxW="lg">
          <Box mt={5}>
            <Heading
              textAlign="center"
              fontSize="3xl"
              color="tan"
              fontWeight={500}
            >
              Contact Us
            </Heading>
          </Box>
          <Box mt={4} p={5} border="1px solid tan" shadow="lg" rounded={"lg"}>
            <form onSubmit={formik.handleSubmit}>
              <FormControl
                mb={3}
                isInvalid={formik.errors.firstName && formik.touched.firstName}
              >
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Your FirstName"
                  id="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.errors.firstName && formik.touched.firstName ? (
                  <ErrorMessage name="firstName">
                    {(msg) => (
                      <Text mt={2} ms={2} color="red" fontSize="13px">
                        {msg}
                      </Text>
                    )}
                  </ErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                mb={3}
                isInvalid={formik.errors.lastName && formik.touched.lastName}
              >
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Your LastName"
                  id="lastName"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.errors.lastName && formik.touched.lastName ? (
                  <ErrorMessage name="lastName">
                    {(msg) => (
                      <Text mt={2} ms={2} color="red" fontSize="13px">
                        {msg}
                      </Text>
                    )}
                  </ErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                mb={3}
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  id="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.errors.email && formik.touched.email ? (
                  <ErrorMessage name="email">
                    {(msg) => (
                      <Text mt={2} ms={2} color="red" fontSize="13px">
                        {msg}
                      </Text>
                    )}
                  </ErrorMessage>
                ) : null}
              </FormControl>
              <FormControl
                mb={3}
                isInvalid={formik.errors.message && formik.touched.message}
              >
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  resize={"none"}
                  type="text"
                  placeholder="Enter Your Message..."
                  id="message"
                  {...formik.getFieldProps("message")}
                />
                {formik.errors.message && formik.touched.message ? (
                  <ErrorMessage name="message">
                    {(msg) => (
                      <Text mt={2} ms={2} color="red" fontSize="13px">
                        {msg}
                      </Text>
                    )}
                  </ErrorMessage>
                ) : null}
              </FormControl>
              <FormControl mb={3}>
                <Button
                  bg="tan"
                  border="1px solid tan"
                  shadow="md"
                  _hover={{ borderColor: "#f4ff4", bg: "transparent" }}
                  type="submit"
                >
                  Submit
                </Button>
              </FormControl>
            </form>
          </Box>
        </Container>
      )}
    </Formik>
  );
}

export default ContactUs
