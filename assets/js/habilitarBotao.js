function habilitarBotao()
{
	var branco = document.getElementById("pesquisar").value;

	if(branco != "" && isNaN(branco) == false)
	{
		document.getElementById("procurar").disabled=false;
	}
	else
	{
		document.getElementById("procurar").disabled=true;
	}
}