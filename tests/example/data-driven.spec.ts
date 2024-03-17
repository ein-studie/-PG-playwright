import { test } from '@tests/fixture';
import { RESOURCES_DIR } from '@test-confing';
import { ImportCsv } from '@test-confing-type';
import { FileOperationUtility } from '@utils';

const path = `${RESOURCES_DIR.imports}/data-driven.csv`;
const records = FileOperationUtility.csvParse<ImportCsv>(path, { columns: true });

for (const record of records) {
  test(`No.${record.seq}__display-title`, async () => {
    console.log(record.task);
  });
}
