/* eslint-disable react/no-children-prop */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Button,
} from "@chakra-ui/react";

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Head>
        <title>EMSS Attendance Tracker</title>
        <meta
          name="description"
          content="Engineering Muslim Student Society of Nigeria, University of Lagos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-2 text-center">
        <h1 className="text-2xl font-semibold mb-3">
          Engineering Muslim Student Society of Nigeria, University of Lagos
        </h1>
        <div className="bg-white w-fit flex  flex-col items-start justify-start shadow-md p-8 m-auto gap-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center w-fit gap-2"
          >
            <div>
              <h1>Welcome to EMSS Faculty Forum</h1>
              <p> Kindly Provide your details</p>
            </div>
            <div className="flex flex-col gap-2">
              {/* <div className="flex flex-col items-start ">
              <label htmlFor="name">Name</label>
              <input className="my-1 bg-gray-200" {...register("example")} />
            </div> */}
              <FormControl className="items-start">
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")} />
                <FormHelperText>We never share your email.</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Fullname</FormLabel>
                <Input type="text" {...register("fullname")} />
              </FormControl>
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+234" />
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    {...register("phoneNumber")}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <Select placeholder="Select Gender" {...register("gender")}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Department</FormLabel>
                <Select
                  placeholder="Select Department"
                  {...register("department")}
                >
                  <option value="Chemical Engineering">
                    Chemical Engineering
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Computer Engineering">
                    Computer Engineering
                  </option>
                  <option value="Electrical Engineering">
                    Electrical Engineering
                  </option>
                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                  <option value="  Metallurgical & Material Engineering">
                    Metallurgical & Material Engineering
                  </option>
                  <option value="Survey & Geoinformatics Engineering">
                    Survey & Geoinformatics Engineering
                  </option>
                  <option value="Systems Engineering">
                    Systems Engineering
                  </option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Level</FormLabel>
                <Select placeholder="Select Level" {...register("level")}>
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="500">500</option>
                </Select>
              </FormControl>
              <Button role="submit" colorScheme="blue" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>Powered by EMSS</footer>
    </div>
  );
}
