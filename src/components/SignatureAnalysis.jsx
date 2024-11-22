import { Link } from "react-router-dom";

const SignatureAnalysis = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]">
      <h1 className="section-header mb-6">SIGNATURE ANALYSIS</h1>
      <Link to="/signatureinsights">
        <button className="btn-border">
          <span className="btn-animation" />
          <span className="btn-content">Tips</span>
        </button>
      </Link>
    </div>
  );
};

export default SignatureAnalysis;
