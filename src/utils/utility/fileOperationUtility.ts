import * as fs from 'node:fs';
import * as csv from 'csv/sync';

/**
 * 【utils】ファイル操作用の汎用クラス
 */
export class FileOperationUtility {
  /**
   * CSVファイルをパースする
   *
   * @param filePath CSVファイルのファイルパス
   * @param options
   */
  public static csvParse<T>(
    filePath: string,
    options?: {
      /** カラム */
      columns: boolean;
    }
  ): T[] {
    const { columns } = options || {};

    const data = fs.readFileSync(filePath);
    const result = csv.parse(data, {
      columns,
    }) as T[];

    return result;
  }
}
