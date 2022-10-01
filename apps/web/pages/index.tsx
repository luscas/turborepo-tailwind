import { Button } from "ui";

export default function Web() {
  return (
    <div className="p-10">
      <h1>Web</h1>

      <hr className="my-10" />

      <Button onClick={(e) => alert(1)}>Touch</Button>
    </div>
  );
}
