/**
 * catechism.js
 * Heidelberg Catechism (1563) and Westminster Shorter Catechism (1647).
 * Both are public-domain historical documents.
 * The app cycles through these each day as the Liturgy section.
 */

'use strict';

const HEIDELBERG_CATECHISM = [
  {
    source: 'Heidelberg Catechism', id: 'HC1',
    question: 'What is your only comfort in life and in death?',
    answer: 'That I am not my own, but belong—body and soul, in life and in death—to my faithful Savior, Jesus Christ. He has fully paid for all my sins with his precious blood, and has delivered me from all the power of the devil. He also watches over me in such a way that not a hair can fall from my head without the will of my Father in heaven; in fact, all things must work together for my salvation. Because I belong to him, Christ, by his Holy Spirit, also assures me of eternal life and makes me wholeheartedly willing and ready from now on to live for him.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC2',
    question: 'How many things must you know to live and die in the joy of this comfort?',
    answer: 'Three things: first, how great my sin and misery are; second, how I am set free from all my sins and misery; third, how I am to thank God for such deliverance.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC3',
    question: 'Where do you learn of your sin and misery?',
    answer: 'From the law of God.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC4',
    question: 'What does God\'s law require of us?',
    answer: 'Christ teaches us this in a summary in Matthew 22: "Love the Lord your God with all your heart and with all your soul and with all your mind. This is the first and greatest commandment. And the second is like it: Love your neighbor as yourself. All the Law and the Prophets hang on these two commandments."'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC5',
    question: 'Can you live up to all this perfectly?',
    answer: 'No. I have a natural tendency to hate God and my neighbor.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC6',
    question: 'Did God create man evil and perverse?',
    answer: 'No. God created man good and in his own image—in true righteousness and holiness—so that he might rightly know God his creator, love him with all his heart, and live with him in eternal happiness, to praise and glorify him.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC7',
    question: 'Then where does this corrupt human nature come from?',
    answer: 'From the fall and disobedience of our first parents, Adam and Eve, in Paradise. This fall has so poisoned our nature that we are all born sinners—corrupt from conception on.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC8',
    question: 'Are we so corrupt that we are totally unable to do any good and inclined toward all evil?',
    answer: 'Yes, unless we are born again by the Spirit of God.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC11',
    question: 'But isn\'t God also merciful?',
    answer: 'God is indeed merciful, but he is also just. His justice requires that sin committed against his supreme majesty be punished with the supreme penalty—eternal punishment of body and soul.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC15',
    question: 'What kind of mediator and deliverer should we look for then?',
    answer: 'One who is truly human and truly righteous, yet more powerful than all creatures—that is, one who is also truly God.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC17',
    question: 'Why must the mediator be truly God?',
    answer: 'So that, by the power of his divinity, he might bear the weight of God\'s wrath in his humanity, and earn for us and restore to us righteousness and life.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC18',
    question: 'And who is this mediator—truly God and at the same time truly human and truly righteous?',
    answer: 'Our Lord Jesus Christ, who was given us to set us completely free and to make us right with God.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC21',
    question: 'What is true faith?',
    answer: 'True faith is not only a sure knowledge by which I hold as true all that God has revealed to us in Scripture; it is also a wholehearted trust, which the Holy Spirit creates in me by the gospel, that God has freely granted, not only to others but to me also, forgiveness of sins, eternal righteousness, and salvation. These are gifts of sheer grace, granted solely by Christ\'s merit.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC26',
    question: 'What do you believe when you say: "I believe in God, the Father Almighty, Creator of heaven and earth"?',
    answer: 'That the eternal Father of our Lord Jesus Christ, who out of nothing created heaven and earth and everything in them, who still upholds and rules them by his eternal counsel and providence, is my God and Father because of Christ his Son. I trust him so much that I do not doubt he will provide whatever I need for body and soul, and he will turn to my good whatever adversity he sends me in this sad world. He is able to do this because he is almighty God; he desires to do this because he is a faithful Father.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC27',
    question: 'What do you understand by the providence of God?',
    answer: 'Providence is the almighty and ever-present power of God by which he upholds, as with his hand, heaven and earth and all creatures, and so rules them that leaf and blade, rain and drought, fruitful and lean years, food and drink, health and sickness, prosperity and poverty—all things, in fact, come to us not by chance but from his fatherly hand.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC28',
    question: 'How does the knowledge of God\'s creation and providence help us?',
    answer: 'We can be patient when things go against us, thankful when things go well, and for the future we can have good confidence in our faithful God and Father that nothing will separate us from his love. All creatures are so completely in his hand that without his will they can neither move nor be moved.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC29',
    question: 'Why is the Son of God called "Jesus," meaning Savior?',
    answer: 'Because he saves us from our sins. Salvation cannot be found in anyone else; it is futile to look for any salvation elsewhere.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC31',
    question: 'Why is he called "Christ," meaning Anointed?',
    answer: 'Because he has been ordained by God the Father and has been anointed with the Holy Spirit to be our chief prophet and teacher who perfectly reveals to us the secret counsel and will of God for our deliverance; our only high priest who has set us free by the one sacrifice of his body, and who continually pleads our cause with the Father; and our eternal king who governs us by his Word and Spirit, and who guards us and keeps us in the freedom he has won for us.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC36',
    question: 'How does the holy conception and birth of Christ benefit us?',
    answer: 'He is our mediator, and in God\'s sight he covers over, with his innocence and perfect holiness, my sinfulness in which I was conceived.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC43',
    question: 'What further gain do we receive from Christ\'s sacrifice and death on the cross?',
    answer: 'By Christ\'s power our old sinful self is crucified, put to death, and buried with him, so that the evil desires of the flesh may no longer rule us, but that instead we may dedicate ourselves as an offering of gratitude to him.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC45',
    question: 'How does Christ\'s resurrection benefit us?',
    answer: 'First, by his resurrection he has overcome death, so that he might make us share in the righteousness he won for us by his death. Second, by his power we too are already now resurrected to a new life. Third, Christ\'s resurrection is a guarantee of our glorious resurrection.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC53',
    question: 'What do you believe concerning the Holy Spirit?',
    answer: 'First, he, as well as the Father and the Son, is eternal God. Second, he has been given to me personally, so that, by true faith, he makes me share in Christ and all his blessings, comforts me, and remains with me forever.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC54',
    question: 'What do you believe concerning the Holy Catholic Church?',
    answer: 'I believe that the Son of God through his Spirit and Word, out of the entire human race, from the beginning of the world to its end, gathers, protects, and preserves for himself a community chosen for eternal life and united in true faith. And of this community I am and always will be a living member.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC56',
    question: 'What do you believe concerning the forgiveness of sins?',
    answer: 'I believe that God, because of Christ\'s atonement, will never hold against me any of my sins, nor my sinful nature which I need to struggle against all my life. Rather, in his grace God grants me the righteousness of Christ to free me forever from judgment.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC57',
    question: 'What comfort does the resurrection of the body give you?',
    answer: 'Not only my soul will be taken immediately after this life to Christ its head, but even my very flesh, raised by the power of Christ, will be reunited with my soul and made like Christ\'s glorious body.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC58',
    question: 'What comfort do you take from the article about the life everlasting?',
    answer: 'Even as I already now experience in my heart the beginning of eternal joy, so after this life I will have perfect blessedness such as no eye has seen, no ear has heard, no heart has imagined—a blessedness in which to praise God eternally.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC60',
    question: 'How are you right with God?',
    answer: 'Only by true faith in Jesus Christ. Even though my conscience accuses me of having grievously sinned against all God\'s commandments and of never having kept any of them, and even though I am still inclined toward all evil, nevertheless, without my deserving it at all, out of sheer grace, God grants and credits to me the perfect satisfaction, righteousness, and holiness of Christ, as if I had never sinned nor been a sinner, as if I had been as perfectly obedient as Christ was obedient for me. All I need to do is to accept this gift of God with a believing heart.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC63',
    question: 'How can you say that the good we do doesn\'t earn anything when God promises to reward it in this life and the next?',
    answer: 'This reward is not earned—it is a gift of grace.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC65',
    question: 'It is by faith alone that we share in Christ and all his blessings: where then does that faith come from?',
    answer: 'The Holy Spirit produces it in our hearts by the preaching of the holy gospel, and confirms it through our use of the holy sacraments.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC86',
    question: 'Since we have been delivered from our misery by grace alone through Christ, without any merit of our own, why then should we still do good works?',
    answer: 'Because Christ, having redeemed and delivered us by his blood, also renews us by his Holy Spirit after his own image, so that with our whole lives we may show that we are thankful to God for his grace and that he may be praised through us. And further, so that each of us may be assured in himself of his faith by its fruits, and so by our godly living our neighbors may be won over to Christ.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC116',
    question: 'Why do Christians need to pray?',
    answer: 'Because prayer is the most important part of the thankfulness God requires of us. And also because God gives his grace and Holy Spirit only to those who pray continually and groan inwardly, asking God for these gifts and thanking him for them.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC117',
    question: 'How does God want us to pray so that he will listen to us?',
    answer: 'First, we must pray from the heart to no other than the one true God, who has revealed himself to us in his Word, asking for everything he has commanded us to ask for. Second, we must acknowledge our need and misery, hiding nothing, and humble ourselves in his majestic presence. Third, we must rest on this unshakable foundation: even though we do not deserve it, God will surely listen to our prayer because of Christ our Lord. That is what he promised us in his Word.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC119',
    question: 'What does God ask you to pray for?',
    answer: 'Everything we need, spiritually and physically, as embraced in the prayer Christ our Lord himself taught us.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC122',
    question: '"Hallowed be your name." What does this mean?',
    answer: 'Enable us to really know you, to bless, worship, and praise you for all your works and for all that shines forth from them: your almighty power, wisdom, kindness, justice, mercy, and truth. And so order our whole lives—our thoughts, words, and actions—that your name will never be blasphemed because of us but always honored and praised.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC123',
    question: '"Your kingdom come." What does this mean?',
    answer: 'Rule us by your Word and Spirit in such a way that more and more we submit to you. Keep your church strong, and add to it. Destroy the devil\'s work; destroy every force which revolts against you and every conspiracy against your Word. Do this until your kingdom is so complete and perfect that in it you are all in all.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC125',
    question: '"Give us today our daily bread." What does this mean?',
    answer: 'Do take care of all our physical needs so that we come to know that you are the only source of everything good, and that neither our work and worry nor your gifts can do us any good without your blessing. And so help us to give up our trust in creatures and to put trust in you alone.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC126',
    question: '"And forgive us our debts, as we also have forgiven our debtors." What does this mean?',
    answer: 'Because of Christ\'s blood, do not hold against us, poor sinners that we are, any of the sins we do or the evil that constantly clings to us. Forgive us just as we are fully determined, as evidence of your grace in us, to forgive our neighbors.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC128',
    question: 'How do you conclude your prayer?',
    answer: '"For yours is the kingdom and the power and the glory forever." That is: We have asked all this of you because, as our all-powerful king, you both can and will give us all that is good; and because your holy name, and not we ourselves, should receive all the glory, forever and ever.'
  },
  {
    source: 'Heidelberg Catechism', id: 'HC129',
    question: 'What does the word "Amen" mean?',
    answer: '"Amen" means: this is sure to be! It is even more sure that God listens to my prayer than that I really desire what I pray for.'
  },
];

const WESTMINSTER_SHORTER_CATECHISM = [
  {
    source: 'Westminster Shorter Catechism', id: 'WSC1',
    question: 'What is the chief end of man?',
    answer: 'Man\'s chief end is to glorify God, and to enjoy him forever.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC2',
    question: 'What rule hath God given to direct us how we may glorify and enjoy him?',
    answer: 'The Word of God, which is contained in the Scriptures of the Old and New Testaments, is the only rule to direct us how we may glorify and enjoy him.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC3',
    question: 'What do the Scriptures principally teach?',
    answer: 'The Scriptures principally teach what man is to believe concerning God, and what duty God requires of man.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC4',
    question: 'What is God?',
    answer: 'God is a Spirit, infinite, eternal, and unchangeable, in his being, wisdom, power, holiness, justice, goodness, and truth.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC5',
    question: 'Are there more Gods than one?',
    answer: 'There is but one only, the living and true God.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC6',
    question: 'How many persons are there in the Godhead?',
    answer: 'There are three persons in the Godhead; the Father, the Son, and the Holy Ghost; and these three are one God, the same in substance, equal in power and glory.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC7',
    question: 'What are the decrees of God?',
    answer: 'The decrees of God are, his eternal purpose, according to the counsel of his will, whereby, for his own glory, he hath foreordained whatsoever comes to pass.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC8',
    question: 'How doth God execute his decrees?',
    answer: 'God executeth his decrees in the works of creation and providence.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC9',
    question: 'What is the work of creation?',
    answer: 'The work of creation is, God\'s making all things of nothing, by the word of his power, in the space of six days, and all very good.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC10',
    question: 'How did God create man?',
    answer: 'God created man male and female, after his own image, in knowledge, righteousness, and holiness, with dominion over the creatures.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC11',
    question: 'What are God\'s works of providence?',
    answer: 'God\'s works of providence are, his most holy, wise, and powerful preserving and governing all his creatures, and all their actions.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC12',
    question: 'What special act of providence did God exercise toward man in the estate wherein he was created?',
    answer: 'When God had created man, he entered into a covenant of life with him, upon condition of perfect obedience; forbidding him to eat of the tree of the knowledge of good and evil, upon the pain of death.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC13',
    question: 'Did our first parents continue in the estate wherein they were created?',
    answer: 'Our first parents, being left to the freedom of their own will, fell from the estate wherein they were created, by sinning against God.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC14',
    question: 'What is sin?',
    answer: 'Sin is any want of conformity unto, or transgression of, the law of God.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC17',
    question: 'Into what estate did the fall bring mankind?',
    answer: 'The fall brought mankind into an estate of sin and misery.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC18',
    question: 'Wherein consists the sinfulness of that estate whereinto man fell?',
    answer: 'The sinfulness of that estate whereinto man fell, consists in the guilt of Adam\'s first sin, the want of original righteousness, and the corruption of his whole nature, which is commonly called original sin; together with all actual transgressions which proceed from it.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC20',
    question: 'Did God leave all mankind to perish in the estate of sin and misery?',
    answer: 'God having, out of his mere good pleasure, from all eternity, elected some to everlasting life, did enter into a covenant of grace, to deliver them out of the estate of sin and misery, and to bring them into an estate of salvation by a Redeemer.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC21',
    question: 'Who is the Redeemer of God\'s elect?',
    answer: 'The only Redeemer of God\'s elect is the Lord Jesus Christ, who, being the eternal Son of God, became man, and so was, and continueth to be, God and man in two distinct natures, and one person, forever.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC22',
    question: 'How did Christ, being the Son of God, become man?',
    answer: 'Christ, the Son of God, became man, by taking to himself a true body, and a reasonable soul, being conceived by the power of the Holy Ghost, in the womb of the Virgin Mary, and born of her, yet without sin.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC25',
    question: 'How doth Christ execute the office of a priest?',
    answer: 'Christ executeth the office of a priest, in his once offering up of himself a sacrifice to satisfy divine justice, and reconcile us to God, and in making continual intercession for us.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC26',
    question: 'How doth Christ execute the office of a king?',
    answer: 'Christ executeth the office of a king, in subduing us to himself, in ruling and defending us, and in restraining and conquering all his and our enemies.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC29',
    question: 'How are we made partakers of the redemption purchased by Christ?',
    answer: 'We are made partakers of the redemption purchased by Christ, by the effectual application of it to us by his Holy Spirit.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC30',
    question: 'How doth the Spirit apply to us the redemption purchased by Christ?',
    answer: 'The Spirit applieth to us the redemption purchased by Christ, by working faith in us, and thereby uniting us to Christ in our effectual calling.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC31',
    question: 'What is effectual calling?',
    answer: 'Effectual calling is the work of God\'s Spirit, whereby, convincing us of our sin and misery, enlightening our minds in the knowledge of Christ, and renewing our wills, he doth persuade and enable us to embrace Jesus Christ, freely offered to us in the gospel.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC32',
    question: 'What benefits do they that are effectually called partake of in this life?',
    answer: 'They that are effectually called do in this life partake of justification, adoption, and sanctification, and the several benefits which in this life do either accompany or flow from them.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC33',
    question: 'What is justification?',
    answer: 'Justification is an act of God\'s free grace, wherein he pardoneth all our sins, and accepteth us as righteous in his sight, only for the righteousness of Christ imputed to us, and received by faith alone.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC34',
    question: 'What is adoption?',
    answer: 'Adoption is an act of God\'s free grace, whereby we are received into the number, and have a right to all the privileges, of the sons of God.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC35',
    question: 'What is sanctification?',
    answer: 'Sanctification is the work of God\'s free grace, whereby we are renewed in the whole man after the image of God, and are enabled more and more to die unto sin, and live unto righteousness.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC36',
    question: 'What are the benefits which in this life do accompany or flow from justification, adoption, and sanctification?',
    answer: 'The benefits which in this life do accompany or flow from justification, adoption, and sanctification, are, assurance of God\'s love, peace of conscience, joy in the Holy Ghost, increase of grace, and perseverance therein to the end.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC37',
    question: 'What benefits do believers receive from Christ at death?',
    answer: 'The souls of believers are at their death made perfect in holiness, and do immediately pass into glory; and their bodies, being still united to Christ, do rest in their graves till the resurrection.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC38',
    question: 'What benefits do believers receive from Christ at the resurrection?',
    answer: 'At the resurrection, believers being raised up in glory, shall be openly acknowledged and acquitted in the day of judgment, and made perfectly blessed in the full enjoying of God to all eternity.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC39',
    question: 'What is the duty which God requireth of man?',
    answer: 'The duty which God requireth of man, is obedience to his revealed will.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC40',
    question: 'What did God at first reveal to man for the rule of his obedience?',
    answer: 'The rule which God at first revealed to man for his obedience, was the moral law.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC42',
    question: 'What is the sum of the ten commandments?',
    answer: 'The sum of the ten commandments is, to love the Lord our God with all our heart, with all our soul, with all our strength, and with all our mind; and our neighbor as ourselves.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC86',
    question: 'What is faith in Jesus Christ?',
    answer: 'Faith in Jesus Christ is a saving grace, whereby we receive and rest upon him alone for salvation, as he is offered to us in the gospel.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC87',
    question: 'What is repentance unto life?',
    answer: 'Repentance unto life is a saving grace, whereby a sinner, out of a true sense of his sin, and apprehension of the mercy of God in Christ, doth, with grief and hatred of his sin, turn from it unto God, with full purpose of, and endeavour after, new obedience.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC88',
    question: 'What are the outward and ordinary means whereby Christ communicateth to us the benefits of redemption?',
    answer: 'The outward and ordinary means whereby Christ communicateth to us the benefits of redemption, are his ordinances, especially the Word, sacraments, and prayer; all which are made effectual to the elect for salvation.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC89',
    question: 'How is the Word made effectual to salvation?',
    answer: 'The Spirit of God maketh the reading, but especially the preaching, of the Word, an effectual means of convincing and converting sinners, and of building them up in holiness and comfort, through faith, unto salvation.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC98',
    question: 'What is prayer?',
    answer: 'Prayer is an offering up of our desires unto God, for things agreeable to his will, in the name of Christ, with confession of our sins, and thankful acknowledgment of his mercies.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC100',
    question: 'What doth the preface of the Lord\'s Prayer teach us?',
    answer: 'The preface of the Lord\'s Prayer, which is "Our Father which art in heaven," teacheth us to draw near to God with all holy reverence and confidence, as children to a father, able and ready to help us; and that we should pray with and for others.'
  },
  {
    source: 'Westminster Shorter Catechism', id: 'WSC107',
    question: 'What doth the conclusion of the Lord\'s Prayer teach us?',
    answer: 'The conclusion of the Lord\'s Prayer, which is "For thine is the kingdom, and the power, and the glory, forever, Amen," teacheth us to take our encouragement in prayer from God only, and in our prayers to praise him, ascribing kingdom, power, and glory to him. And, in testimony of our desire, and assurance to be heard, we say, Amen.'
  },
];

// Combined pool: alternate Heidelberg and Westminster for variety
const ALL_CATECHISM = [];
const maxLen = Math.max(HEIDELBERG_CATECHISM.length, WESTMINSTER_SHORTER_CATECHISM.length);
for (let i = 0; i < maxLen; i++) {
  if (i < HEIDELBERG_CATECHISM.length) ALL_CATECHISM.push(HEIDELBERG_CATECHISM[i]);
  if (i < WESTMINSTER_SHORTER_CATECHISM.length) ALL_CATECHISM.push(WESTMINSTER_SHORTER_CATECHISM[i]);
}

/**
 * Return a catechism entry for the given day index.
 */
function getDailyCatechism(dayIndex) {
  return ALL_CATECHISM[dayIndex % ALL_CATECHISM.length];
}
