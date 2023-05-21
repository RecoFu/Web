const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;

async function syncData() {
  const { results } = await notion.databases.query({
    database_id: databaseId,
  });

  // Process the results and update the homepage accordingly
}

module.exports = syncData;
