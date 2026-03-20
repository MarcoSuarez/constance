/**
 * prayers.js
 * Collects and prayers from the Book of Common Prayer (1979).
 * Public domain. Organized by liturgical season.
 */

'use strict';

const BCP_PRAYERS = {
  Advent: [
    {
      title: 'Collect for the First Sunday of Advent',
      text: 'Almighty God, give us grace to cast away the works of darkness, and put on the armor of light, now in the time of this mortal life in which your Son Jesus Christ came to visit us in great humility; that in the last day, when he shall come again in his glorious majesty to judge both the living and the dead, we may rise to the life immortal; through him who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.'
    },
    {
      title: 'Collect for the Second Sunday of Advent',
      text: 'Merciful God, who sent your messengers the prophets to preach repentance and prepare the way for our salvation: Give us grace to heed their warnings and forsake our sins, that we may greet with joy the coming of Jesus Christ our Redeemer; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.'
    },
    {
      title: 'Collect for the Third Sunday of Advent',
      text: 'Stir up your power, O Lord, and with great might come among us; and, because we are sorely hindered by our sins, let your bountiful grace and mercy speedily help and deliver us; through Jesus Christ our Lord, to whom, with you and the Holy Spirit, be honor and glory, now and for ever. Amen.'
    },
    {
      title: 'Collect for the Fourth Sunday of Advent',
      text: 'Purify our conscience, Almighty God, by your daily visitation, that your Son Jesus Christ, at his coming, may find in us a mansion prepared for himself; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.'
    },
  ],
  Christmas: [
    {
      title: 'Collect for Christmas Day',
      text: 'O God, you make us glad by the yearly festival of the birth of your only Son Jesus Christ: Grant that we, who joyfully receive him as our Redeemer, may with sure confidence behold him when he comes to be our Judge; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.'
    },
    {
      title: 'Collect for the Second Sunday after Christmas',
      text: 'O God, who wonderfully created, and yet more wonderfully restored, the dignity of human nature: Grant that we may share the divine life of him who humbled himself to share our humanity, your Son Jesus Christ; who lives and reigns with you, in the unity of the Holy Spirit, one God, for ever and ever. Amen.'
    },
  ],
  Epiphany: [
    {
      title: 'Collect for the Epiphany',
      text: 'O God, by the leading of a star you manifested your only Son to the peoples of the earth: Lead us, who know you now by faith, to your presence, where we may see your glory face to face; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.'
    },
  ],
  'Epiphany Season': [
    {
      title: 'Collect for the First Sunday after Epiphany',
      text: 'Father in heaven, who at the baptism of Jesus in the River Jordan proclaimed him your beloved Son and anointed him with the Holy Spirit: Grant that all who are baptized into his Name may keep the covenant they have made, and boldly confess him as Lord and Savior; who with you and the Holy Spirit lives and reigns, one God, in glory everlasting. Amen.'
    },
    {
      title: 'A Collect for Guidance',
      text: 'Heavenly Father, in you we live and move and have our being: We humbly pray you so to guide and govern us by your Holy Spirit, that in all the cares and occupations of our life we may not forget you, but may remember that we are ever walking in your sight; through Jesus Christ our Lord. Amen.'
    },
    {
      title: 'A Collect for the Renewal of Life',
      text: 'O God, the King eternal, whose light divides the day from the night and turns the shadow of death into the morning: Drive far from us all wrong desires, incline our hearts to keep your law, and guide our feet into the way of peace; that, having done your will with cheerfulness during the day, we may, when night comes, rejoice to give you thanks; through Jesus Christ our Lord. Amen.'
    },
    {
      title: 'Collect for the Last Sunday after Epiphany',
      text: 'O God, who before the passion of your only-begotten Son revealed his glory upon the holy mountain: Grant to us that we, beholding by faith the light of his countenance, may be strengthened to bear our cross, and be changed into his likeness from glory to glory; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.'
    },
  ],
  Lent: [
    {
      title: 'Collect for Ash Wednesday',
      text: 'Almighty and everlasting God, you hate nothing you have made and forgive the sins of all who are penitent: Create and make in us new and contrite hearts, that we, worthily lamenting our sins and acknowledging our wretchedness, may obtain of you, the God of all mercy, perfect remission and forgiveness; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.'
    },
    {
      title: 'Collect for the First Sunday in Lent',
      text: 'Almighty God, whose blessed Son was led by the Spirit to be tempted by Satan: Come quickly to help us who are assaulted by many temptations; and, as you know the weaknesses of each of us, let each one find you mighty to save; through Jesus Christ your Son our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.'
    },
    {
      title: 'Collect for the Second Sunday in Lent',
      text: 'O God, whose glory it is always to have mercy: Be gracious to all who have gone astray from your ways, and bring them again with penitent hearts and steadfast faith to embrace and hold fast the unchangeable truth of your Word, Jesus Christ your Son; who with you and the Holy Spirit lives and reigns, one God, for ever and ever. Amen.'
    },
    {
      title: 'Collect for the Third Sunday in Lent',
      text: 'Almighty God, you know that we have no power in ourselves to help ourselves: Keep us both outwardly in our bodies and inwardly in our souls, that we may be defended from all adversities which may happen to the body, and from all evil thoughts which may assault and hurt the soul; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.'
    },
    {
      title: 'Collect for the Fourth Sunday in Lent',
      text: 'Gracious Father, whose blessed Son Jesus Christ came down from heaven to be the true bread which gives life to the world: Evermore give us this bread, that he may live in us, and we in him; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.'
    },
    {
      title: 'Collect for the Fifth Sunday in Lent',
      text: 'Almighty God, you alone can bring into order the unruly wills and affections of sinners: Grant your people grace to love what you command and desire what you promise; that, among the swift and varied changes of the world, our hearts may surely there be fixed where true joys are to be found; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.'
    },
    {
      title: 'A Collect for Peace',
      text: 'O God, the author of peace and lover of concord, to know you is eternal life and to serve you is perfect freedom: Defend us, your humble servants, in all assaults of our enemies; that we, surely trusting in your defense, may not fear the power of any adversaries; through the might of Jesus Christ our Lord. Amen.'
    },
  ],
  'Holy Week': [
    {
      title: 'Collect for Palm Sunday',
      text: 'Almighty and everliving God, in your tender love for the human race you sent your Son our Savior Jesus Christ to take upon him our nature, and to suffer death upon the cross, giving us the example of his great humility: Mercifully grant that we may walk in the way of his suffering, and also share in his resurrection; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.'
    },
    {
      title: 'Collect for Monday in Holy Week',
      text: 'Almighty God, whose most dear Son went not up to joy but first he suffered pain, and entered not into glory before he was crucified: Mercifully grant that we, walking in the way of the cross, may find it none other than the way of life and peace; through Jesus Christ your Son our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.'
    },
    {
      title: 'Collect for Good Friday',
      text: 'Almighty God, we pray you graciously to behold this your family, for whom our Lord Jesus Christ was willing to be betrayed, and given into the hands of sinners, and to suffer death upon the cross; who now lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.'
    },
    {
      title: 'Collect for Holy Saturday',
      text: 'O God, Creator of heaven and earth: Grant that, as the crucified body of your dear Son was laid in the tomb and rested on this holy Sabbath, so we may await with him the coming of the third day, and rise with him to newness of life; who now lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.'
    },
  ],
  Easter: [
    {
      title: 'Collect for Easter Day',
      text: 'Almighty God, who through your only-begotten Son Jesus Christ overcame death and opened to us the gate of everlasting life: Grant that we, who celebrate with joy the day of the Lord\'s resurrection, may be raised from the death of sin by your life-giving Spirit; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.'
    },
    {
      title: 'Collect for the Second Sunday of Easter',
      text: 'Almighty and everlasting God, who in the Paschal mystery established the new covenant of reconciliation: Grant that all who have been reborn into the fellowship of Christ\'s Body may show forth in their lives what they profess by their faith; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.'
    },
    {
      title: 'Collect for the Third Sunday of Easter',
      text: 'O God, whose blessed Son made himself known to his disciples in the breaking of bread: Open the eyes of our faith, that we may behold him in all his redeeming work; who lives and reigns with you, in the unity of the Holy Spirit, one God, now and for ever. Amen.'
    },
    {
      title: 'Collect for the Fourth Sunday of Easter',
      text: 'O God, whose Son Jesus is the good shepherd of your people: Grant that when we hear his voice we may know him who calls us each by name, and follow where he leads; who, with you and the Holy Spirit, lives and reigns, one God, for ever and ever. Amen.'
    },
    {
      title: 'Collect for the Fifth Sunday of Easter',
      text: 'Almighty God, whom truly to know is everlasting life: Grant us so perfectly to know your Son Jesus Christ to be the way, the truth, and the life, that we may steadfastly follow his steps in the way that leads to eternal life; through Jesus Christ your Son our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, for ever and ever. Amen.'
    },
    {
      title: 'Collect for the Sixth Sunday of Easter',
      text: 'O God, you have prepared for those who love you such good things as surpass our understanding: Pour into our hearts such love towards you, that we, loving you in all things and above all things, may obtain your promises, which exceed all that we can desire; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, for ever and ever. Amen.'
    },
    {
      title: 'Collect for Ascension Day',
      text: 'Almighty God, whose blessed Son our Savior Jesus Christ ascended far above all heavens that he might fill all things: Mercifully give us faith to perceive that, according to his promise, he abides with his Church on earth, even to the end of the ages; through Jesus Christ our Lord, who lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.'
    },
    {
      title: 'Collect for the Seventh Sunday of Easter',
      text: 'O God, the King of glory, you have exalted your only Son Jesus Christ with great triumph to your kingdom in heaven: Do not leave us comfortless, but send us your Holy Spirit to strengthen us, and exalt us to that place where our Savior Christ has gone before; who lives and reigns with you and the Holy Spirit, one God, in glory everlasting. Amen.'
    },
  ],
  Pentecost: [
    {
      title: 'Collect for the Day of Pentecost',
      text: 'Almighty God, on this day you opened the way of eternal life to every race and nation by the promised gift of your Holy Spirit: Shed abroad this gift throughout the world by the preaching of the Gospel, that it may reach to the ends of the earth; through Jesus Christ our Lord, who lives and reigns with you, in the unity of the Holy Spirit, one God, for ever and ever. Amen.'
    },
    {
      title: 'Collect for Trinity Sunday',
      text: 'Almighty and everlasting God, you have given to us your servants grace, by the confession of a true faith, to acknowledge the glory of the eternal Trinity, and in the power of your divine Majesty to worship the Unity: Keep us steadfast in this faith and worship, and bring us at last to see you in your one and eternal glory, O Father; who with the Son and the Holy Spirit live and reign, one God, for ever and ever. Amen.'
    },
  ],
  'Ordinary Time': [
    {
      title: 'A Collect for Grace',
      text: 'Lord God, almighty and everlasting Father, you have brought us in safety to this new day: Preserve us with your mighty power, that we may not fall into sin, nor be overcome by adversity; and in all we do, direct us to the fulfilling of your purpose; through Jesus Christ our Lord. Amen.'
    },
    {
      title: 'A Collect for Guidance',
      text: 'Heavenly Father, in you we live and move and have our being: We humbly pray you so to guide and govern us by your Holy Spirit, that in all the cares and occupations of our life we may not forget you, but may remember that we are ever walking in your sight; through Jesus Christ our Lord. Amen.'
    },
    {
      title: 'A Collect for Peace',
      text: 'O God, the author of peace and lover of concord, to know you is eternal life and to serve you is perfect freedom: Defend us, your humble servants, in all assaults of our enemies; that we, surely trusting in your defense, may not fear the power of any adversaries; through the might of Jesus Christ our Lord. Amen.'
    },
    {
      title: 'A Collect for the Presence of Christ',
      text: 'Lord Jesus, stay with us, for evening is at hand and the day is past; be our companion in the way, kindle our hearts, and awaken hope, that we may know you as you are revealed in Scripture and the breaking of bread. Grant this for the sake of your love. Amen.'
    },
    {
      title: 'A General Thanksgiving',
      text: 'Almighty God, Father of all mercies, we your unworthy servants give you humble thanks for all your goodness and loving-kindness to us and to all whom you have made. We bless you for our creation, preservation, and all the blessings of this life; but above all for your immeasurable love in the redemption of the world by our Lord Jesus Christ; for the means of grace, and for the hope of glory. Amen.'
    },
    {
      title: 'A Prayer for the Mission of the Church',
      text: 'Everlasting God, whose will it is that all should come to you through your Son Jesus Christ: Inspire our witness to him, that all may know the power of his forgiveness and the hope of his resurrection; who lives and reigns with you and the Holy Spirit, one God, now and for ever. Amen.'
    },
    {
      title: 'A Collect for the Evening',
      text: 'O God, the life of all who live, the light of the faithful, the strength of those who labor, and the repose of the dead: We thank you for the blessings of the day that is past, and humbly ask for your protection through the coming night. Bring us in safety to the morning hours; through him who died and rose again for us, your Son our Savior Jesus Christ. Amen.'
    },
    {
      title: 'A Collect for Sundays',
      text: 'O God, you make us glad with the weekly remembrance of the glorious resurrection of your Son our Lord: Give us this day such blessing through our worship of you, that the week to come may be spent in your favor; through Jesus Christ our Lord. Amen.'
    },
    {
      title: 'A Collect for the Care of Creation',
      text: 'Almighty God, in giving us dominion over things on earth, you made us fellow workers in your creation: Give us wisdom and reverence so to use the resources of nature, that no one may suffer from our abuse of them, and that generations yet to come may continue to praise you for your bounty; through Jesus Christ our Lord. Amen.'
    },
    {
      title: 'A Collect for Perseverance',
      text: 'Lord God, calm the fears that assail us and strengthen us in our desire to serve you: Inspire us with your love and direct our steps in the ways of righteousness, that persevering to the end, we may receive the crown of life; through Jesus Christ our Lord, who lives and reigns with you in the unity of the Holy Spirit, one God, for ever and ever. Amen.'
    },
  ],
};

/**
 * Given a liturgical season and day index, return the BCP prayer for that day.
 */
function getDailyPrayer(season, dayIndex) {
  // Map specific holy day seasons to their pool
  const seasonMap = {
    'Easter Sunday':      BCP_PRAYERS.Easter,
    'Eastertide':         BCP_PRAYERS.Easter,
    'Ascension Day':      BCP_PRAYERS.Easter,
    'Pentecost Sunday':   BCP_PRAYERS.Pentecost,
    'Trinity Sunday':     BCP_PRAYERS.Pentecost,
    'Palm Sunday':        BCP_PRAYERS['Holy Week'],
    'Holy Monday':        BCP_PRAYERS['Holy Week'],
    'Holy Tuesday':       BCP_PRAYERS['Holy Week'],
    'Holy Wednesday':     BCP_PRAYERS['Holy Week'],
    'Maundy Thursday':    BCP_PRAYERS['Holy Week'],
    'Good Friday':        BCP_PRAYERS['Holy Week'],
    'Holy Saturday':      BCP_PRAYERS['Holy Week'],
  };

  const pool =
    seasonMap[season] ||
    BCP_PRAYERS[season] ||
    BCP_PRAYERS['Ordinary Time'];

  return pool[dayIndex % pool.length];
}
