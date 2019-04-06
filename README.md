### SQL-запрос

```sh
SELECT docs.date, docTypes.name AS type, docs.id, products.name, products.image, products.price, rows.quantity, products.removed FROM docs 
                   INNER JOIN docTypes ON docs.typeId = docTypes.id
                       INNER JOIN rows ON docs.id = rows.docId
                           INNER JOIN products ON rows.productId = products.id;
```

