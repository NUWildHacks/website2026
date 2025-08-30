import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Formik } from "formik";

interface EmailInputProps {
  onSubmit: (email: string) => void;
  submitButtonText?: string;
  successMessage?: string;
}

export function EmailInput({
  onSubmit,
  submitButtonText = "Subscribe",
}: EmailInputProps) {
  // const [email, setEmail] = useState("");

  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors: { email?: string } = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            onSubmit(values.email);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-start gap-2"
            noValidate
          >
            <div className="flex flex-col md:w-74 gap-2">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p className="opacity-80 text-sm text-left text-red-500">
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <Button
              type="submit"
              variant="outline"
              disabled={isSubmitting}
              // onClick={() => onSubmit(values.email)}
            >
              {submitButtonText}
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
}
