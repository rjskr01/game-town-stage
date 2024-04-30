'use client'

import { ChangeEvent, useState, useRef, forwardRef, useEffect, ForwardRefRenderFunction } from "react";
import Image from 'next/image';

interface AvatarProps {
  callback?: (file: File) => void;
  url?: string;
}

const Avatar: ForwardRefRenderFunction<HTMLInputElement, AvatarProps> = ({ callback, url = "" }, ref) => {
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  useEffect(() => {
    console.log(url);
    console.log(`avatarUrl -  ${avatarUrl}`);
  });

  const openFileBrowser = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file: File | undefined = input.files?.[0];
      const reader: FileReader = new FileReader();

      if (file) {
        callback?.(file);
      }

      reader.onload = async () => {
        setAvatarUrl(reader.result as string);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div className="border-solid border border-gray-300 m-[10px] h-[70%] w-[80%] rounded-lg">
      {!(avatarUrl || url) && (
        <button
          className="w-full h-full flex items-center justify-center border-none bg-transparent underline text-black cursor-pointer"
          onClick={openFileBrowser}
        >
          Add photo or Avatar
        </button>
      )}
      {(avatarUrl || url) && (
        <Image
          src={avatarUrl ? avatarUrl : url}
          alt="Avatar"
          width={200}
          height={200}
          onClick={openFileBrowser}
        />
      )}
    </div>
  );
};

export default forwardRef(Avatar);
