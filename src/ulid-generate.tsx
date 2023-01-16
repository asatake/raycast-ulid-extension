import { showHUD, Clipboard } from "@raycast/api";
import { ulid } from "ulid";

// Runs async. code in a no-view command
export default async function Command() {
  try {
    const id = ulid();
    await Clipboard.copy(id);
    await showHUD(`✅ Copied new UUID.`);
  } catch (e) {
    await showHUD(`❌ Failed creation UUID.`);
  }
}
