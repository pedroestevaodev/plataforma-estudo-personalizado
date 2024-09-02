import { ModuleType } from "@/@types/appContext";

const prompts = {
    generateModules: (themeStudy: string) => {
        // return `Por favor, monte um plano de estudo personalizado para o tema: '${themeStudy}'. Você deve montar módulos para os diferentes temas a serem abordados. Cada módulo deve ser rico em conteúdo, contudo, por enquanto você deve devolver somente o título e uma breve descrição do que será abordado em cada módulo. Por favor devolva o resultado em json. Crie quantos módulos forem necessários, mas limitando-se a no máximo 4 módulos. Exemplo de resposta: 'planoEstudo: [{title,description},{...},....]'. RESPOSTA:`;
        return `Por favor, monte um plano de estudo personalizado para o tema: '${themeStudy}'. Você deve montar módulos para os diferentes subtemas a serem abordados.

            Instruções para o conteúdo dos módulos:

            1. Cada módulo deve conter:
            - **Título**: Um título que resuma o foco do módulo.
            - **Descrição**: Uma breve descrição do conteúdo que será abordado, rica em detalhes e informações.
            2. Limite o plano a **no máximo 4 módulos**.

            Formato de retorno:

            - O resultado deve ser devolvido em **formato JSON válido**, seguindo estritamente o modelo abaixo:

            [
            {
                "title": "Título do Módulo",
                "description": "Descrição breve do módulo."
            },
            {
                "title": "Título do Módulo",
                "description": "Descrição breve do módulo."
            }
            // ... demais módulos
            ]

            Observações importantes:

            - Certifique-se de que **cada valor da chave "title" e "description" esteja entre aspas duplas** e que o JSON seja formatado corretamente.
            - Não adicione mais do que o especificado e garanta que o JSON seja **válido e consistente**.

            **Exemplo de resposta esperada:**

            [
            {
                "title": "Introdução ao Tema",
                "description": "Este módulo introduz os conceitos básicos do tema..."
            },
            {
                "title": "Subtema Importante",
                "description": "Este módulo aborda o subtema com foco em..."
            }
            ]

            Por favor, devolva apenas o JSON conforme o exemplo acima.`
    },
    generateModule: (module: ModuleType) => {
        // return `Por favor, gere o conteúdo do módulo: '${module.title}'. Desenvolva com base na descrição: '${module.description}', sem fugir do tema. O conteúdo deve ser rico, contendo imagens para ilustrar as informações quando possível, ou quando não for possível, um link para uma imagem. Por favor devolva a página HTML em um json. Exemplo de resposta: 'modulo: [{"html": string do html},{...},...]'. RESPEITE O MODELO DO JSON. NÂO DEVOLVA UMA PÁGINA HTML, APENAS OS ELEMENTOS DO BODY (H1, P, SPAN, ETC). RESPOSTA:`;
        return `Por favor, gere o conteúdo do módulo: '${module.title}'. Desenvolva com base na descrição: '${module.description}', sem fugir do tema.
            
            O conteúdo deve ser:

            1. Rico e informativo, contendo imagens para ilustrar as informações quando possível. Quando não for possível incluir imagens, forneça um link para uma imagem relacionada.
            2. Estruturado no formato de JSON e deve seguir estritamente o modelo abaixo:

            [
            {
                "html": "<elementos HTML aqui>"
            },
            {
                "html": "<outros elementos HTML aqui>"
            }
            ]

            Observações importantes:

            - **Apenas** os elementos dentro do body (exemplo: <h1>, <p>, <span>, etc.) devem ser incluídos. 
            - Não inclua o <html>, <head>, ou <body>.
            - **Cada valor da chave "html" deve ser uma string válida** com o conteúdo HTML escapado corretamente.
            - O JSON deve ser **válido e consistente** com o formato especificado, com aspas duplas em todos os lugares corretos.
            - Não adicione mais do que o especificado, e certifique-se de que o JSON esteja corretamente formatado e sem erros de sintaxe.

            **Exemplo de resposta esperada:**
            [
            {
                "html": "<h1>Título do Módulo</h1><p>Conteúdo do módulo...</p>"
            },
            {
                "html": "<h2>Subtítulo</h2><p>Mais conteúdo...</p><img src='link_para_imagem' alt='descrição da imagem'>"
            }
            ]

            Por favor, devolva apenas o JSON conforme o exemplo acima.`;
    }
};

export default prompts;
