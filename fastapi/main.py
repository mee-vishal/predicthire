from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pdfplumber
import io  # ✅ needed for BytesIO

app = FastAPI()

# CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # replace with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "PDF extractor backend running"}

@app.post("/extract")
async def extract_text(pdf: UploadFile = File(...)):
    if pdf.content_type != "application/pdf":
        return {"error": "Only PDF files are allowed"}

    try:
        contents = await pdf.read()  # read uploaded file
        text = ""
        with pdfplumber.open(io.BytesIO(contents)) as pdf_file:  # ✅ use io.BytesIO
            for page in pdf_file.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n\n"

        return {"text": text}

    except Exception as e:
        return {"error": f"Failed to extract PDF text: {str(e)}"}