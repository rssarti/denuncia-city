export enum enStatusComplaints {
  PENDING = 0, // Aguardando análise da IA
  GENERATED_BY_AI = 1, // Peça gerada pela IA
  VERIFIED_BY_HUMAN = 2, // Verificado por um humano
  SENT_TO_CITY_HALL = 3, // Enviado para a prefeitura
  SENT_TO_JUDICIARY = 4, // Judicializado
  SENT_TO_MP = 5, // Enviado ao Ministério Público
  RESOLVED = 6, // Denúncia finalizada
  CITIZEN_FEEDBACK = 7, // Feedback do munícipe
}
