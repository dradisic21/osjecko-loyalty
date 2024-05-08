import { Nav } from "../../layout/Nav/Nav";
import { CameraScan } from "../../components/CameraScan/CameraScan";

export function CameraScanPage() {
  return (
    <div className="h-screen">
      <Nav />
      <div className="flex justify-center items-center mx-auto px-15p pt-40p">
        <CameraScan />
      </div>
    </div>
  );
}
