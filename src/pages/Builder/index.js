import React from "react";
import { toast } from "react-toastify";
import { Form, Input } from "@rocketseat/unform";
import { Container } from "./styles";
import AvatarInput from "./AvatarInput";
import * as Yup from "yup";
import axios from "axios";

const schema = Yup.object().shape({
  name: Yup.string().required("seu nick é obrigatorio*"),
  pokename1: Yup.string().required("pokemon1 obrigatorio*"),
  pokename2: Yup.string().required("pokemon2 obrigatorio*"),
  pokename3: Yup.string().required("pokemon3 obrigatorio*"),
  pokename4: Yup.string().required("pokemon4 obrigatorio*"),
  pokename5: Yup.string().required("pokemon5 obrigatorio*"),
  pokename6: Yup.string().required("pokemon6 obrigatorio*")
});


export default function Builder() {

  function handleSubmit(data) {
    console.log(data);
    return;
    try {
      axios.post("http://localhost:3333/build", data).then(() => {
        toast.success("Jogador criado com sucesso!");
      });
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id"/>
        <Input name="name" placeholder="Digite seu nick" />
        <Input
          name="pokename1"
          type="text"
          placeholder="Digite o nome do seu pokemon1"
        />
        <Input
          name="pokename2"
          type="text"
          placeholder="Digite o nome do seu pokemon2"
        />
        <Input
          name="pokename3"
          type="text"
          placeholder="Digite o nome do seu pokemon3"
        />
        <Input
          name="pokename4"
          type="text"
          placeholder="Digite o nome do seu pokemon4"
        />
        <Input
          name="pokename5"
          type="text"
          placeholder="Digite o nome do seu pokemon5"
        />
        <Input
          name="pokename6"
          type="text"
          placeholder="Digite o nome do seu pokemon6"
        />
        <button type="submit">Create</button>
      </Form>
    </Container>
  );
}
