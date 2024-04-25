import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string }>({
    mode: "onBlur",
    defaultValues: { name: "aiful" },
  });
  const onSubmit = (data: { name: string }) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4 w-[200px]">
        <input
          type="text"
          className="input border border-gray-300 my-[10px]"
          {...register("name", {
            required: "入力してください",
          })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <button type="submit" className="btn btn-outline btn-accent">
          OUTLINED
        </button>
      </div>
    </form>
  );
}

export default App;
