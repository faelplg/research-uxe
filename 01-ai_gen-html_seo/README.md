# HTML Base - Esqueleto Moderno para Sites

Este projeto fornece um esqueleto HTML moderno, otimizado para SEO e performance, usando apenas HTML, CSS e JavaScript puro (sem frameworks ou bibliotecas externas).

## Características

- ✅ HTML5 semântico e acessível
- ✅ Otimização para SEO com meta tags
- ✅ Suporte completo a Open Graph para compartilhamento em redes sociais
- ✅ Design responsivo para dispositivos móveis
- ✅ Suporte para tema claro/escuro com prefers-color-scheme
- ✅ Modo noturno automático e alternável manualmente
- ✅ Estrutura de CSS organizada com variáveis
- ✅ Performance otimizada para Lighthouse
- ✅ Suporte para PWA com webmanifest
- ✅ JavaScript modularizado e comentado
- ✅ Formulário com validação básica

## Estrutura do Projeto

```
00-html_base/
│
├── css/
│   ├── normalize.css     # Reset CSS para consistência entre navegadores
│   └── styles.css        # Estilos principais
│
├── js/
│   └── main.js           # JavaScript principal
│
├── img/                  # Diretório para imagens (a ser criado)
│
├── colors.css            # Definição da paleta de cores
├── index.html            # Página principal
├── site.webmanifest      # Configuração para PWA
└── README.md             # Documentação
```

## Paleta de Cores

O projeto utiliza variáveis CSS para definir uma paleta de cores consistente, com suporte automático para temas claro e escuro. A paleta está definida no arquivo `colors.css` e inclui:

- Cores primárias e variações
- Cores secundárias e variações
- Cores de acento
- Cores de superfície e fundo
- Cores de texto e bordas

## Componentes UI

O projeto inclui exemplos básicos de vários componentes UI:

- Header com navegação responsiva
- Hero section com gradiente
- Cards
- Botões em várias variações
- Formulários com validação
- Exibição da paleta de cores
- Footer com grid responsivo

## Otimizações para SEO

O HTML inclui todas as meta tags necessárias para boa indexação:

- Title e meta description otimizados
- Open Graph tags para compartilhamento em mídias sociais
- Twitter Card para compartilhamento no Twitter
- Dados estruturados Schema.org
- HTML semântico com landmarks apropriados

## Como Usar

1. Clone ou baixe este repositório
2. Personalize o arquivo `colors.css` conforme necessário
3. Modifique `index.html` para seu conteúdo específico
4. Substitua os textos e imagens pelos seus próprios
5. Atualize as meta tags SEO e Open Graph com suas informações

## Boas Práticas

Este template segue as seguintes boas práticas:

### Performance

- CSS crítico inline (para conteúdo above-the-fold)
- Pré-carregamento de fontes e recursos críticos
- JavaScript diferido para não bloquear renderização
- Imagens otimizadas (quando adicionadas)

### Acessibilidade

- HTML semântico e estruturado
- Contraste de cores adequado
- Atributos ARIA quando necessário
- Navegação por teclado
- Textos alternativos para imagens

### SEO

- Meta tags completas
- Schema.org para dados estruturados
- URLs amigáveis
- HTML semântico para melhor compreensão dos motores de busca

## Personalização

Para personalizar este template:

1. **Cores**: Modifique as variáveis no arquivo `colors.css`
2. **Fontes**: Atualize os links de fonte no `<head>` de `index.html`
3. **Conteúdo**: Substitua o texto de demonstração pelo seu próprio conteúdo
4. **SEO**: Atualize todas as meta tags com suas informações específicas
5. **Favicon**: Adicione seus próprios favicons na pasta `img`

## Compatibilidade

O template é compatível com todos os navegadores modernos e inclui fallbacks para garantir uma boa experiência mesmo em navegadores mais antigos.

## Lighthouse Score

Este template foi projetado para atingir pontuações altas no Lighthouse:

- Performance: 90+
- Acessibilidade: 90+
- Melhores Práticas: 90+
- SEO: 100

## Desenvolvimento Futuro

Ideias para melhorar este template:

- Adicionar exemplos de animações CSS
- Incluir mais componentes UI
- Adicionar um service worker completo para PWA
- Criar páginas adicionais de exemplo

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para propor melhorias ou correções.
