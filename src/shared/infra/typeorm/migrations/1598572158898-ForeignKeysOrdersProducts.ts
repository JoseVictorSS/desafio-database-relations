import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class ForeignKeysOrdersProducts1598572158898
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKey(
      'orders_products',
      new TableForeignKey({
        name: 'OrderProductsProduct',
        columnNames: ['product_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('orders_products', 'OrderProductsProduct');
  }
}
