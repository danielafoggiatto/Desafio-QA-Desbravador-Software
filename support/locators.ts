/**
 * Centralizador de locators para o POM
 * Agrupa todos os seletores por página/seção
 */

export const LOCATORS = {
  // ===== LOGIN PAGE =====
  LOGIN: {
    MODAL: '#jquery-msg-content',
    BTN_ACESSAR_CADASTRO: 'text=Acessar meu cadastro',
    FORM_AUTENTICA: '#form_autentica',
    INPUT_USUARIO: '#usuario',
    INPUT_SENHA: '#senha',
    BTN_AUTENTICAR: 'input[type="button"][value="Autenticar (Acessar)"]',
    USER_BOX: '#dados_usuario',
    LINK_LOGOFF: 'text=Log-off',
  },

  // ===== CADASTRO PAGE =====
  CADASTRO: {
    FORM_CADASTRO: '#form_cadastro',
    INPUT_PRIMEIRO_NOME: '#nmpessoafn',
    INPUT_SOBRENOME: '#nmpessoasn',
    INPUT_EMAIL: '#nmlogin',
    INPUT_EMAIL_CONFIRMACAO: '#nmlogin1',
    INPUT_SENHA: '#nmsenha',
    INPUT_SENHA_CONFIRMACAO: '#nmsenha2',
    BTN_SALVAR: '#button',
    LINK_NAO_CADASTRADO: 'text=/não sou cadastrado/i',
  },

  // ===== BUSCA/DATAS PAGE =====
  DATAS: {
    INPUT_DATA_INICIO: '#dtini, #data_ini, input[name="dtini"], input[name="data_ini"]',
    INPUT_DATA_FIM: '#dtfim, #data_fim, input[name="dtfim"], input[name="data_fim"]',
    SELECT_ADULTOS: '#adultos, select[name*="adult"], select[id*="adult"]',
    SELECT_CRIANCAS: '#criancas, #free, select[name*="free"], select[id*="free"], select[name*="chd"]',
    BTN_CONTINUAR_RESERVA: 'button:has-text("Continuar Reserva")',
  },

  // ===== QUARTOS/TARIFAS PAGE =====
  QUARTOS: {
    LINHA_ST1: '#linx-ST1, #linha-ST1',
    HIDDEN_MAXPAX_ST1: '#maxpax-ST1',
    SELECT_ADULTOS_ST1: '#esc_adt-ST1',
    SELECT_CRIANCAS_ST1: '#esc_chdfree-ST1',
    BTN_COMPRA_ST1: '#bt_compra-ST1',
    CONTAINER_PAGAR: '#bt_pagar',
    BTN_PAGAR: '#bt_pagar button',
    LISTA_QUARTOS: '#quartos-selecao-lista',
    ITEM_QUARTO: '#quartos-selecao-lista li',
  },

  // ===== TERMOS E CONDIÇÕES PAGE =====
  TERMOS: {
    CHECKBOX_TERMOS: '#lido',
    RESUMO_HOSPEDAGEM: '#resumo_hospedagem',
    BTN_CONTINUAR_FINAL: 'button:has-text("Continuar Reserva")',
  },

  // ===== VALIDAÇÃO PERÍODO =====
  PERIODO: {
    INPUT_CHECKIN: '#dtcheckin',
    INPUT_CHECKOUT: '#dtcheckout',
    SELECT_ADULTOS: '#adultos',
  },

  // ===== HOSPEDES PAGE =====
  HOSPEDES: {
    INPUT_CHECKIN: '#checkin, input[name="checkin"], input[id*="checkin"], input[id*="dtini"]',
    INPUT_CHECKOUT: '#checkout, input[name="checkout"], input[id*="checkout"], input[id*="dtfim"]',
    SELECT_ADULTOS: '#adultos, select[name*="adult"], select[id*="adult"], select[id*="adt"]',
    SELECT_CRIANCAS_FREE: '#free, #criancas, select[id*="free"], select[name*="free"], select[id*="chd"]',
  },

  // ===== VALIDAÇÃO PERÍODO RESERVA =====
  VALIDACAO_PERIODO: {
    INPUT_DATA_INICIO: '#data_ini, input[name="data_ini"]',
    INPUT_DATA_FIM: '#data_fim, input[name="data_fim"]',
    SELECT_ADULTOS: '#adultos',
    BTN_CONTINUAR: 'button:has-text("Continuar Reserva")',
  },

  // ===== MENSAGENS E ALERTAS =====
  MESSAGES: {
    BODY_TEXT: 'body',
    MSG_ERRO: 'text=/erro|invalido|obrigat|não/i',
    MSG_SUCESSO: 'text=/sucesso|confirmado/i',
  },
};
