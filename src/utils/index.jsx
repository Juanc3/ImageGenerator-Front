import FileSaver from "file-saver";

async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
export default downloadImage;
