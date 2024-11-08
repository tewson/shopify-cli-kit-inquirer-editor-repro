import { renderTasks } from "@shopify/cli-kit/node/ui";
import editor from "@inquirer/editor";

(async () => {
  await renderTasks([
    {
      title: `Wait`,
      task: async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      },
    },
  ]);

  const output = await editor({
    message: "Input:",
  });

  console.log("Done!", output);
})();
