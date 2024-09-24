import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Step2 = ({ setStep }) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, "Name must be at least 5 characters")
      .max(20, "Name can't be longer than 20 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number is not valid")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number can't be longer than 15 digits")
      .required("Phone number is required"),

    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .max(500, "Message can't exceed 500 characters")
      .required("Message is required")
  });

  const onSubmit = (values) => {
    console.log("Form submitted successfully:", values);
    setStep(2); // Move to Step 3
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 md:py-0">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">STEP #2</h2>
        <p className="mb-2 text-3xl font-medium max-w-sm mx-auto">Details</p>
        <p className="mb-4 text-md text-gray-500 font-medium max-w-lg mx-auto">
          We're thrilled at the opportunity to help grow your business online.<br />
          Please let us know the best way to reach you.
        </p>
      </div>

      {/* Formik Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="space-y-4">
            <div className="min-w-[300px] sm:min-w-[400px] mx-auto">
              <label htmlFor="name" className="block text-md font-medium mb-2">
                Name
              </label>
              <Field
                type="text"
                name="name"
                className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="email" className="block text-md font-medium mb-2">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-md font-medium mb-2">
                  Phone Number
                </label>
                <Field
                  type="text"
                  name="phone"
                  className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-md font-medium mb-2">
                Anything else you would like to share?
              </label>
              <Field
                as="textarea"
                name="message"
                rows="6"
                className="w-full border border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
              >
                Send Request
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Step2;
