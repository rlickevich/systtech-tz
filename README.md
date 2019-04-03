SQL-запрос, выбирающий из бд нужные данные.

  SELECT docs.date, docTypes.id AS docType, docs.id, products.name, products.image,
  products.price, rows.quantity, products.removed
    FROM docs 
      INNER JOIN docTypes ON docs.typeId = docTypes.id
        INNER JOIN rows ON docs.id = rows.docId
          INNER JOIN products ON rows.productId = products.id;
