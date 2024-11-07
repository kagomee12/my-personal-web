import { formSchema, TformSchema } from "@/types/form-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useContact = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TformSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: "",
        name: "",
        phone: "",
        message: "",
    }
  });

  const onSubmit = (data: TformSchema) => {
    console.log(data);
    reset();
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

  return {
    control,
    handleSubmit,
    reset,
    errors,
    onSubmit,
    onError,
  };
};
