import React, { useState, useEffect, useRef } from "react";

import { useField } from "@rocketseat/unform";
import axios from "axios";

import { Container } from "./styles";

export default function AvatarInput() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();

  const ref = useRef();

  const { registerField } = useField("avatar");

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: "avatar_id",
        ref: ref.current,
        path: "dataset.file"
      });
    }
  }, [ref.current]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();
    data.append("file", e.target.files[0]);

    const response = await axios.post("http://localhost:3333/files", data);

    const { id, url } = response.data;

    setPreview(url);
    setFile(id);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview || "https://api.adorable.io/avatars/285/abott@adorable.png"
          }
          alt="avatar"
        />

        <input
          type="file"
          id="avatar"
          data-file={file}
          accept="image/*"
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
