import { ChangeEvent, useEffect, useRef, useState } from "react";
import { PickerProps } from "./types";
import Image from "next/image";


export default function ImagePicker({ label, name }: PickerProps) {
  const pickerButton = useRef<HTMLInputElement>(null);
  const [loadedImage, setLoadedImage] = useState <string | null> (null);

  function handlePickButton() {
    pickerButton.current?.click();
  };
  function handleOnChage(e : ChangeEvent<HTMLInputElement>) {
    const image = e.target.files?.[0];

    if (!image || !image.type.startsWith('image/')) {
        setLoadedImage(null);
        alert('You can only choose file type image.')
        return;
    } 
        const imageUrl = URL.createObjectURL(image);
        setLoadedImage(imageUrl);
  };
// Revoke the previous URL when changing the image to free memory:
  useEffect(() => {
    return () => {
      if(loadedImage){
        URL.revokeObjectURL(loadedImage);
      }
    }
  }, [loadedImage])
  
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="flex gap-[24px] items-center">
        <div className="mt-[20px] ">
            {!loadedImage ? (
                <p className="flex justify-center items-center border-2 rounded-2xl w-[200px] h-[200px]">No image picked yet.</p>
            ): (
                <Image src={loadedImage} width={200} height={200} className="object-cover rounded-2xl" alt="The image picked by the user"/>
            )}
        </div>

        <input
          className="absolte w-0 h-0 opacity-0"
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/jpg"
          name={name}
          ref={pickerButton}
          onChange={handleOnChage}
          required
        />
        <button
          onClick={handlePickButton}
          className="bg-gradient-to-r from-persimmon to-[#e85d04] p-2 rounded-2xl mt-4 w-[200px] h-[50px] transition hover:scale-105 active:scale-95 cursor-pointer"
          type="button"
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
