export default function handler(req, res) {
  res.status(200).json([
    {id: 1, name: 'Kaique Campos', email: 'kcampos@alunos.utfpr.edu.br'}, 
    {id: 2, name: 'Lucas Malheiros', email: 'lucasmalheiros@alunos.utfpr.edu.br'},
    {id: 3, name: 'Tiago Saggioro', email: 'tfsaggioro@hotmail.com'},
    {id: 3, name: 'Bruno Mendes', email: 'bmendes922@gmail.com'},
 ]);
}
