import React, { useEffect, useState } from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/copyData';

const COMMENT_STORAGE_KEY = 'mve_user_comment';
const REPLIES_STORAGE_KEY = 'mve_user_replies';
const LIKES_STORAGE_KEY = 'mve_liked_comments';

interface LocalComment {
  name: string;
  text: string;
  timeAgo: string;
}

interface LocalReply {
  name: string;
  text: string;
}

export const TestimonialsSection: React.FC = () => {
  const items = TESTIMONIALS_DATA.items;

  const [userComment, setUserComment] = useState<LocalComment | null>(null);
  const [nameInput, setNameInput] = useState('');
  const [textInput, setTextInput] = useState('');

  // respostas do próprio visitante por comentário (só visíveis pra ele), guardadas por id do comentário
  const [userReplies, setUserReplies] = useState<Record<string, LocalReply>>({});
  // curtidas do próprio visitante por comentário, guardadas localmente
  const [likedComments, setLikedComments] = useState<Record<string, boolean>>({});
  const [openReplyFor, setOpenReplyFor] = useState<string | null>(null);
  const [replyNameInput, setReplyNameInput] = useState('');
  const [replyTextInput, setReplyTextInput] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem(COMMENT_STORAGE_KEY);
    if (saved) {
      try {
        setUserComment(JSON.parse(saved));
      } catch {
        // ignora JSON inválido
      }
    }
    const savedReplies = localStorage.getItem(REPLIES_STORAGE_KEY);
    if (savedReplies) {
      try {
        setUserReplies(JSON.parse(savedReplies));
      } catch {
        // ignora JSON inválido
      }
    }
    const savedLikes = localStorage.getItem(LIKES_STORAGE_KEY);
    if (savedLikes) {
      try {
        setLikedComments(JSON.parse(savedLikes));
      } catch {
        // ignora JSON inválido
      }
    }
  }, []);

  const toggleLike = (commentId: string) => {
    const updated = { ...likedComments, [commentId]: !likedComments[commentId] };
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(updated));
    setLikedComments(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameInput.trim() || !textInput.trim() || userComment) return;

    const newComment: LocalComment = {
      name: nameInput.trim(),
      text: textInput.trim(),
      timeAgo: 'agora mesmo',
    };

    localStorage.setItem(COMMENT_STORAGE_KEY, JSON.stringify(newComment));
    setUserComment(newComment);
  };

  const handleReplySubmit = (e: React.FormEvent, commentId: string) => {
    e.preventDefault();
    if (!replyNameInput.trim() || !replyTextInput.trim() || userReplies[commentId]) return;

    const updated = {
      ...userReplies,
      [commentId]: { name: replyNameInput.trim(), text: replyTextInput.trim() },
    };
    localStorage.setItem(REPLIES_STORAGE_KEY, JSON.stringify(updated));
    setUserReplies(updated);
    setOpenReplyFor(null);
    setReplyNameInput('');
    setReplyTextInput('');
  };

  return (
    <section id="depoimentos" className="bg-white py-12 sm:py-20 border-b border-[#E2E8F0]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172554] tracking-tight leading-tight mb-3 sm:mb-4">
            Veja o que estudantes estão achando dos{' '}
            <span className="text-[#172554] underline decoration-[#172554]/30 decoration-2 underline-offset-4">
              Mapas Visuais
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4B5563] leading-relaxed">
            {TESTIMONIALS_DATA.subheadline}
          </p>
        </div>

        {/* LISTA DE COMENTÁRIOS ESTILO INSTAGRAM */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs divide-y divide-[#F1F5F9]">
          {items.map((dep) => {
            const myReply = userReplies[dep.id];
            const isReplying = openReplyFor === dep.id;

            return (
              <div key={dep.id} className="p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#E2E8F0] shrink-0">
                    <img
                      src={dep.avatarUrl}
                      alt={dep.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover block"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                      <span className="text-sm font-bold text-[#172554]">{dep.name}</span>
                      <span className="text-xs text-[#94A3B8]">{dep.timeAgo}</span>
                    </div>
                    {dep.badge && (
                      <span className="inline-block text-[10px] font-semibold text-[#F97316] bg-[#FFF7ED] border border-[#FFEDD5] rounded-full px-2 py-0.5 mt-1 mb-1.5">
                        {dep.badge}
                      </span>
                    )}
                    <p className="text-xs sm:text-sm text-[#374151] leading-relaxed">
                      {dep.text}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <button
                        type="button"
                        onClick={() => toggleLike(dep.id)}
                        className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
                          likedComments[dep.id] ? 'text-[#EF4444]' : 'text-[#64748B] hover:text-[#EF4444]'
                        }`}
                      >
                        <Heart
                          className={`w-3.5 h-3.5 transition-all ${
                            likedComments[dep.id] ? 'fill-[#EF4444] text-[#EF4444]' : 'fill-none'
                          }`}
                        />
                        {(dep.likes || 0) + (likedComments[dep.id] ? 1 : 0)}
                      </button>
                      {!myReply && (
                        <button
                          type="button"
                          onClick={() => setOpenReplyFor(isReplying ? null : dep.id)}
                          className="flex items-center gap-1 text-xs text-[#64748B] font-medium hover:text-[#F97316] transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          Responder
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* CAIXA DE RESPOSTA (aberta ao clicar em "Responder") */}
                {isReplying && !myReply && (
                  <form
                    onSubmit={(e) => handleReplySubmit(e, dep.id)}
                    className="ml-12 sm:ml-[52px] mt-3 space-y-2"
                  >
                    <input
                      type="text"
                      value={replyNameInput}
                      onChange={(e) => setReplyNameInput(e.target.value)}
                      placeholder="Seu nome"
                      maxLength={40}
                      className="w-full text-xs sm:text-sm border border-[#E2E8F0] rounded-lg px-3 py-2 outline-none focus:border-[#F97316] transition-colors"
                    />
                    <textarea
                      value={replyTextInput}
                      onChange={(e) => setReplyTextInput(e.target.value)}
                      placeholder="Escreva sua resposta..."
                      maxLength={200}
                      rows={2}
                      className="w-full text-xs sm:text-sm border border-[#E2E8F0] rounded-lg px-3 py-2 outline-none focus:border-[#F97316] transition-colors resize-none"
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="bg-[#172554] hover:bg-[#1e3a8a] text-white font-bold text-xs py-2 px-4 rounded-lg transition-colors"
                      >
                        Responder
                      </button>
                      <button
                        type="button"
                        onClick={() => setOpenReplyFor(null)}
                        className="text-xs text-[#94A3B8] font-medium py-2 px-2"
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                )}

                {/* RESPOSTA DO PRÓPRIO VISITANTE (visível somente pra ele) */}
                {myReply && (
                  <div className="ml-12 sm:ml-[52px] mt-3 flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#F97316]/10 text-[#F97316] font-bold flex items-center justify-center shrink-0 text-xs">
                      {myReply.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0 bg-[#F8FAFC] rounded-xl px-3 py-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-bold text-[#172554]">{myReply.name}</span>
                        <span className="text-[10px] font-semibold text-[#16A34A]">Você</span>
                      </div>
                      <p className="text-xs text-[#374151] leading-relaxed mt-0.5">
                        {myReply.text}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* COMENTÁRIO DO PRÓPRIO VISITANTE (visível somente pra ele) */}
          {userComment && (
            <div className="p-4 sm:p-5 flex items-start gap-3 bg-[#FFF9F5]">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F97316]/10 text-[#F97316] font-bold flex items-center justify-center shrink-0 text-sm">
                {userComment.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                  <span className="text-sm font-bold text-[#172554]">{userComment.name}</span>
                  <span className="text-xs text-[#94A3B8]">{userComment.timeAgo}</span>
                  <span className="text-[10px] font-semibold text-[#16A34A] bg-[#F0FDF4] border border-[#DCFCE7] rounded-full px-2 py-0.5">
                    Você
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#374151] leading-relaxed mt-1">
                  {userComment.text}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <button
                    type="button"
                    onClick={() => toggleLike('own-comment')}
                    className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
                      likedComments['own-comment'] ? 'text-[#EF4444]' : 'text-[#64748B] hover:text-[#EF4444]'
                    }`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 transition-all ${
                        likedComments['own-comment'] ? 'fill-[#EF4444] text-[#EF4444]' : 'fill-none'
                      }`}
                    />
                    {likedComments['own-comment'] ? 1 : 0}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CAIXA PARA DEIXAR COMENTÁRIO */}
        <div className="mt-5 sm:mt-6 bg-[#FFF9F5] border border-dashed border-[#F97316]/30 rounded-2xl p-4 sm:p-5">
          {userComment ? (
            <p className="text-xs sm:text-sm text-[#475569] text-center font-medium">
              Agradecemos por comentar sobre nosso material. Sua avaliação ajuda muito o nosso trabalho!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <span className="text-xs font-bold text-[#172554] uppercase tracking-wider block mb-1">
                ✍️ Deixe seu comentário ou dúvida:
              </span>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Seu nome (ex: Ana Clara)"
                maxLength={40}
                className="w-full text-sm border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 outline-none focus:border-[#F97316] transition-colors"
              />
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Escreva o que você achou do material ou sua dúvida..."
                maxLength={280}
                rows={3}
                className="w-full text-sm border border-[#E2E8F0] rounded-xl px-3.5 py-2.5 outline-none focus:border-[#F97316] transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-[#172554] hover:bg-[#1e3a8a] text-white font-heading font-bold text-sm py-3 rounded-xl transition-colors"
              >
                PUBLICAR COMENTÁRIO
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
