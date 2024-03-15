import FileSaver from "file-saver";

export async function downloadImage(_id: any, photo: string | Blob) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
