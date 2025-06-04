import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { GetImages, SendPost } from "../../../functions";
import FormField from "../../(subcomponents)/FormField";
import Loader from "../../(subcomponents)/Loader";
import Preview from "../../../assets/preview.png";

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const validateInput = (inputValue) => {
      const regex = /^[a-zA-Z0-9\s]*$/; // Expresión regular para permitir solo letras, números y espacios
      if (!regex.test(inputValue)) {
        toast.error("No se permiten caracteres especiales en este campo.");
        return inputValue.replace(/[^a-zA-Z0-9\s]/g, "");
      }
      return inputValue;
    };
    const newValue = validateInput(value);
    setForm({ ...form, [name]: newValue });
  };

  const generateImage = async () => {
    try {
      setGeneratingImg(true);
      const res = await GetImages();
      if (res.status === 200) {
        const image = res.data.image;
        setForm({ ...form, photo: image });
        toast.success("Image Generated");
      }
    } catch (err) {
      toast.error("An error has appeared");
      console.error(err);
    } finally {
      setGeneratingImg(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.prompt && form.photo && form.name) {
      setLoading(true);
      try {
        const res = await SendPost(form);
        if (res.status === 200) {
          toast.success("Success");
          setTimeout(() => {
            navigate("/");
          }, 1000);
          return res;
        }
      } catch (err) {
        toast.error("An error has appeared");
        console.log(err);
      } finally {
        setLoading(false);
      }
    } else {
      toast("Please complete with the details", {
        icon: "🔷",
      });
    }
  };
  return (
    <section className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Generate your Image
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Generate an imaginative image and share it with the community
        </p>
      </div>

      <form className="m-auto mt-16 max-w-2xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div className="m-auto relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={Preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
          <div className="m-auto mt-5 flex gap-5">
            <button
              type="button"
              onClick={generateImage}
              className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {generatingImg ? "Generating..." : "Generate"}
            </button>
          </div>
          {form.photo && (
            <>
              <FormField
                labelName="Image Description"
                type="text"
                name="prompt"
                placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
                value={form.prompt}
                handleChange={handleChange}
                maxLength={40}
                minLength={8}
              />
              <FormField
                labelName="Your Name"
                type="text"
                name="name"
                placeholder="Ex., john doe"
                value={form.name}
                handleChange={handleChange}
                maxLength={8}
                minLength={3}
              />
            </>
          )}
        </div>
        {form?.photo && (
          <div className="m-auto mt-10 flex flex-col items-center">
            <p className="mt-2 text-[#666e75] text-[14px]">
              ** Once you have created the image you want, you can share it with
              others in the community **
            </p>
            <button
              type="submit"
              className=" mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {loading ? "Sharing..." : "Share with the Community"}
            </button>
          </div>
        )}

        <Toaster />
      </form>
    </section>
  );
};

export default CreatePost;
