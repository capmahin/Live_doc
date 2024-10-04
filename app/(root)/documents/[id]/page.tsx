import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center gap-2"></div>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
