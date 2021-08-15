function convertXml({ nome, codigo, descricao, vlrUnit }) {
    return `<?xml version="1.0" encoding="ISO-8859-1"?>
    <pedido>
      <cliente>
          <nome>${nome}</nome>
      </cliente>
      <transporte>
        <volume>
          <servico>digital</servico>
        </volume>
      </transporte>
      <itens>
          <item>
              <codigo>${codigo}</codigo>
              <descricao>${descricao}</descricao>
              <qtde>1</qtde>
              <vlr_unit>${vlrUnit}</vlr_unit>
              <vlr>1</vlr>
          </item>
      </itens>
    </pedido>
  `;
  }
  
  module.exports = convertXml;
  